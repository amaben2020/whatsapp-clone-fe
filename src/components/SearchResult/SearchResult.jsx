import React from "react";
import { useSelector } from "react-redux";
import { ENDPOINTS, api } from "../../base/api";
const SearchResult = ({ picture, chatName, status, receiverId }) => {
  console.log(receiverId);

  const { user } = useSelector((state) => state);

  const handleCreateConversation = async () => {
    try {
      // use the receiver id to create a convo
      await api.post(
        ENDPOINTS.conversations,
        {
          receiver_id: receiverId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.user.token}`,
          },
        },
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div
      className="border w-[90%] mx-auto"
      onClick={() => handleCreateConversation()}
    >
      <div className="flex gap-10 p-3">
        <div className="items-center gap-x-4">
          <img
            src={picture}
            alt=""
            srcset=""
            className="w-[90px] h-full rounded-full"
          />
        </div>
        <div>
          <p className="flex justify-between mt-3"></p>
          <h3 className="text-xl font-bold"> {chatName} </h3>
          <span className="italic">Status: {status} </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

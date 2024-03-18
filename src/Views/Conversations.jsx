import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dateHandler } from "../base/utils/date";
import {
  getConversations,
  getMessagesWithConversationId,
} from "../redux/features/chat/chatSlice";
const Conversations = () => {
  const { user, chat } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user.token) {
      dispatch(getConversations(user.user.token));
    }
  }, [user.user.token, dispatch]);

  useEffect(() => {
    if (chat.error && chat.error.includes("Rejected")) {
      navigate("/login");
    }
  }, [chat.error, navigate]);

  if (!chat.conversations) {
    return <div>No conversations found for this user</div>;
  }

  const handleMessages = async (convoId) => {
    console.log(convoId);
    try {
      const response = await dispatch(
        getMessagesWithConversationId(convoId, user.user.token),
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {chat.conversations?.data?.map((convo) => (
        <div
          className="p-3 border gap-y-3 hover:cursor-pointer hover:bg-gray-800"
          onClick={() => handleMessages(convo?._id)}
        >
          <div className="flex items-center gap-x-4">
            <img
              src={convo?.users[1]?.picture}
              alt=""
              srcset=""
              className="w-10 h-6 border rounded-2xl"
            />
            <h3> {convo.users[1].name} </h3>
          </div>

          <p className="flex justify-between mt-3">
            {" "}
            <span> {convo?.latestMessage?.message} </span>
            <span className="italic">
              {" "}
              {dateHandler(convo?.latestMessage?.createdAt)}{" "}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Conversations;

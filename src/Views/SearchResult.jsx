import React from "react";

const SearchResult = ({ picture, chatName, status, joinedDate }) => {
  return (
    <div className="border w-[90%] mx-auto">
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

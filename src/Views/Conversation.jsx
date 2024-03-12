import React from "react";
import { dateHandler } from "../base/utils/date";

const Conversation = ({ picture, chatName, status, joinedDate }) => {
  return (
    <div>
      <div className="p-3 border gap-y-3">
        <div className="flex items-center gap-x-4">
          <img
            src={picture}
            alt=""
            srcset=""
            className="w-[100px] h-full border rounded-2xl"
          />
        </div>
      </div>

      <div>
        <p className="flex justify-between mt-3">
          {" "}
          <span className="italic"> {dateHandler(joinedDate)} </span>
        </p>
        <h3> {chatName} </h3>
        <span>Status: {status} </span>
      </div>
    </div>
  );
};

export default Conversation;

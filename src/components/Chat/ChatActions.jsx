import React from "react";
import { messageBG } from "../../constants/message.background";
import { AttachmentIcon, EmojiIcon } from "../svg";

const ChatActions = ({ activeConvo }) => {
  return (
    <div>
      <div
        className="max-h-[calc(100vh-250px)] w-full p-6 overflow-scroll"
        style={{
          background: `no-repeat url(${messageBG})`,
        }}
      >
        {JSON.stringify(activeConvo)}
      </div>
      {/* MESSAGING AREA */}
      <div className="flex w-full gap-6 px-3 py-1 mt-2">
        <button>
          <EmojiIcon className="fill-white" />
        </button>

        <button>
          <AttachmentIcon className="fill-white" />
        </button>

        {/* <CloseIcon /> */}

        <input
          type="text"
          placeholder="Type message here..."
          className="w-2/3 p-2 bg-gray-800 border rounded-md"
        />
      </div>
      {/* INPUT */}
      {/* FILES */}
      {/* EMOJIS */}
    </div>
  );
};

export default ChatActions;

import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import { messageBG } from "../../constants/message.background";
import { AttachmentIcon, EmojiIcon } from "../svg";

const ChatActions = ({ activeConvo }) => {
  const [message, setMessage] = useState("");

  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

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
      <div className="relative flex w-full gap-6 px-3 py-1 mt-2">
        <button className="" onClick={() => setIsEmojiOpen((p) => !p)}>
          <EmojiIcon className="fill-white hover:fill-yellow-500" />
        </button>
        {isEmojiOpen && (
          <div className="absolute top-[-455px] left-[10px] slideUp">
            <EmojiPicker />
          </div>
        )}
        <button>
          <AttachmentIcon className="fill-white" />
        </button>

        {/* <CloseIcon /> */}

        <form>
          <input
            type="text"
            placeholder="Type message here..."
            className="w-2/3 p-2 bg-gray-800 border rounded-md"
          />
        </form>
      </div>
      {/* INPUT */}
      {/* FILES */}
      {/* EMOJIS */}
    </div>
  );
};

export default ChatActions;

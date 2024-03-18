import React from "react";
import { messageBG } from "../../constants/message.background";

const ChatActions = ({ activeConvo }) => {
  return (
    <div>
      <div
        className="max-h-[calc(100vh-220px)] w-full p-6 overflow-scroll border-2"
        style={{
          background: `no-repeat url(${messageBG})`,
        }}
      >
        {JSON.stringify(activeConvo)}
      </div>
      {/* MESSAGING AREA */}
      {/* INPUT */}
      {/* FILES */}
      {/* EMOJIS */}
    </div>
  );
};

export default ChatActions;

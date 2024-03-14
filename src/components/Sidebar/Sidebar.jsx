import React from "react";

const Sidebar = ({ input, header, notification, conversations, profile }) => {
  return (
    <div className="flex flex-col">
      {profile}
      <div className="w-full p-4 mx-auto text-center border align-self-center justify-self-center">
        {input}
      </div>
      <div>{header}</div>
      <div>{notification}</div>
      <div className="h-[calc(100vh-30vh)] overflow-scroll">
        {conversations}
      </div>
    </div>
  );
};

export default Sidebar;

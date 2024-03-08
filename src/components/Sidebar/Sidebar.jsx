import React from "react";

const Sidebar = ({ input, header, notification, conversations }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">{input}</div>
      <div>{header}</div>
      <div>{notification}</div>
      <div>{conversations}</div>
    </div>
  );
};

export default Sidebar;

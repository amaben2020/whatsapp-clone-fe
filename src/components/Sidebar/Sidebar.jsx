import React from "react";

const Sidebar = ({ input, header, notification }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">{input}</div>
      <div>{header}</div>
      <div>{notification}</div>
    </div>
  );
};

export default Sidebar;

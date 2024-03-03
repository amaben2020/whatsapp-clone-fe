import React from "react";

const Sidebar = ({ header, notification }) => {
  return (
    <div className="flex flex-col ">
      <div>{header}</div>
      <div>{notification}</div>
    </div>
  );
};

export default Sidebar;

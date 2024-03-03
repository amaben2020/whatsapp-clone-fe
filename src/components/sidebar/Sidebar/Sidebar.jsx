import React from "react";

const Sidebar = ({ header }) => {
  return (
    <div className="flex flex-col ">
      <div>{header}</div>
    </div>
  );
};

export default Sidebar;

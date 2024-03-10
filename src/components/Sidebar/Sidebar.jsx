import React from "react";

const Sidebar = ({
  input,
  header,
  notification,
  conversations,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col overflow-scroll">
      <div className="w-full p-4 mx-auto text-center border align-self-center justify-self-center ">
        {input}
      </div>
      <div>{header}</div>
      <div>{notification}</div>
      <div>{conversations}</div>
    </div>
  );
};

export default Sidebar;

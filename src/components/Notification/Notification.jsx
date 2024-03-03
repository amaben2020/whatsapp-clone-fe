import React, { useState } from "react";
import { CloseIcon, NotificationIcon } from "../svg";

const Notification = ({ text }) => {
  const [show, setShow] = useState(true);

  const handleShowNotification = () => {
    setShow((p) => !p);
  };
  return (
    <>
      {show && (
        <div className="flex items-center justify-between w-full p-5 border rounded-xl">
          <NotificationIcon className="w-40 h-20 fill-white" />
          <p className="text-lg font-bold text-white"> {text} </p>

          <button onClick={handleShowNotification}>
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;

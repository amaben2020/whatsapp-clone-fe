import React from "react";
import { ContactIcon } from "../svg";
import ChatIcon from "../svg/Chat";
import CommunityIcon from "../svg/Community";

const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-between p-3 border">
      <div>
        <ContactIcon className="w-40 h-20" />
      </div>
      <div className="flex items-center gap-4">
        <CommunityIcon className="text-white fill-white" />
        <ChatIcon className="text-white fill-white" />
      </div>
    </div>
  );
};

export default SidebarHeader;

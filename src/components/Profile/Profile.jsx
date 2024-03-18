import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from "../svg";

const Profile = ({ picture, name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-6 p-6 border-b-2">
      <div>
        <img src={picture} alt="" className="rounded-[150px] max-w-12" />
      </div>
      {!name?.length && (
        <ul className="flex items-center gap-6">
          <li>
            <CommunityIcon className="fill-white" />
          </li>
          <li>
            {" "}
            <StoryIcon className="fill-white" />
          </li>
          <li>
            {" "}
            <ChatIcon className="fill-white" />
          </li>
          <li
            className="relative transition-all duration-150 hover:cursor-pointer"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <DotsIcon className="fill-white" />

            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu/Menu";
import {
  ChatIcon,
  CommunityIcon,
  DotsIcon,
  StoryIcon,
} from "../components/svg";

const UserProfile = ({ picture }) => {
  const { user } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    console.log("Ran");
    console.count();
  }, []);
  return (
    <div className="flex items-center justify-between gap-6 p-6">
      <div>
        <img src={user.user.picture} alt="" className="rounded-full max-w-12" />
      </div>
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
        </li>{" "}
        <li
          className="relative transition-all duration-150 hover:cursor-pointer"
          onClick={() => setIsMenuOpen((p) => !p)}
        >
          <DotsIcon className="fill-white" />

          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;

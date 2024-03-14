import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatIcon,
  CommunityIcon,
  DotsIcon,
  StoryIcon,
} from "../components/svg";
import { logout } from "../redux/features/user/userSlice";

const UserProfile = ({ picture }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Ran");
    console.count();
  }, []);
  return (
    <div className="flex items-center justify-between gap-6 p-6">
      <div className="p-3"></div>
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
          onClick={() => setIsMenuOpen(true)}
        >
          <DotsIcon className="fill-white" />

          {isMenuOpen && (
            <div className="absolute left-0 z-20 w-40 p-3 border shadow-md top-10 bg-slate-800">
              <ul className="flex flex-col gap-y-6">
                <li> New Group</li>
                <li> New Community</li>
                <li> Settings</li>
                <li
                  onClick={() => {
                    dispatch(logout());
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;

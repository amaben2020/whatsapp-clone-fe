import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/user/userSlice";

const Menu = ({ setIsMenuOpen }) => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default Menu;

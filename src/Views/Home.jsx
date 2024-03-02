import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/user/userSlice";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(logout())}
        className="p-3 border rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

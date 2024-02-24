import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/user/userSlice";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Home
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Home;

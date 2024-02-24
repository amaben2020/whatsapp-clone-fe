import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/user/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      Home {user?.user.token}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Home;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getConversations } from "../redux/features/chat/chatSlice";
// const Conversations = () => {
//   const data = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   console.log("chat", data.chat);

//   useEffect(() => {
//     if (data.user.user.token) {
//       dispatch(getConversations(data.user.user.token));

//       if (data.chat?.error.includes("Rejected")) {
//         navigate("/login");
//       }
//     }
//   }, [data.chat.error, data.user.user.token, dispatch, navigate]);
//   return (
//     <div>
//       Conversations
//       {JSON.stringify(data.chat.conversations)}
//     </div>
//   );
// };

// export default Conversations;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getConversations } from "../redux/features/chat/chatSlice";

const Conversations = () => {
  const { user, chat } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user.token) {
      dispatch(getConversations(user.user.token));
    }
  }, [user.user.token, dispatch]);

  useEffect(() => {
    if (chat.error && chat.error.includes("Rejected")) {
      navigate("/login");
    }
  }, [chat.error, navigate]);

  if (!chat.conversations) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Conversations
      {JSON.stringify(chat.conversations)}
    </div>
  );
};

export default Conversations;

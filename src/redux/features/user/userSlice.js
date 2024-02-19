import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "",
  error: "",
  user: {
    id: "",
    name: "",
    email: "",
    picture: "",
    status: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user", // in debugger user/<action>
  initialState,
  reducers: {
    logout: (state, action) => {
      state.error = "";
      state.user = {
        id: "",
        name: "",
        email: "",
        picture: "",
        status: "",
        token: "",
      };
      state.status = "";
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

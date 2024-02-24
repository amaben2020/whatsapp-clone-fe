import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

export const registerUser = createAsyncThunk(
  "user/register",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        values,
      );

      return data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        values,
      );

      return data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  },
);

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

  extraReducers: (builder) => {
    // register
    builder.addCase(registerUser.pending, (state, payload) => {
      state.status = "pending";
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user.email = action?.payload.user?.email;
      state.user.name = action?.payload.user?.name;
      state.user.picture = action?.payload.user?.picture;
      state.user.token = action?.payload.user?.token;
      state.status = action?.payload.message;
    });

    builder.addCase(registerUser.rejected, (state, payload) => {
      state.status = "failed";
      state.error = payload.error;
    });

    // login
    builder.addCase(loginUser.pending, (state, payload) => {
      state.status = "pending";
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user.email = action?.payload.user?.email;
      state.user.name = action?.payload.user?.name;
      state.user.picture = action?.payload.user?.picture;
      state.user.token = action?.payload.user?.token;
      state.status = action?.payload.message;
    });

    builder.addCase(loginUser.rejected, (state, payload) => {
      state.status = "failed";
      state.error = payload.error;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

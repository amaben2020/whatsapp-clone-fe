import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  status: "",
  error: "",
  user: {
    id: "",
    name: "ben",
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
      const { data } = axios.post(
        `http://localhost:8000/api/v1/auth/register`,
        values,
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error", error);
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
    builder
      .addCase(registerUser.pending, (state, payload) => {
        state.status = "pending";
      })
      .addCase(registerUser.fulfilled, (state, payload) => {
        console.log("PAYLOAD", payload);
        state.status = "";
        state.user = payload;
      })
      .addCase(registerUser.rejected, (state, payload) => {
        state.status = "failed";
        state.error = payload.error;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

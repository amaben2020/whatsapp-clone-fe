import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  conversations: [],
  error: "",
  status: "",
  activeConversation: {},
  notifications: [],
};

export const getConversations = createAsyncThunk(
  "conversation",
  async (token, { isRejectedWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/v1/conversations",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Data");

      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  },
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveConversation: (state, action) => {
      state.activeConversation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConversations.fulfilled, (state, action) => {
      console.log("action", action.payload);
      state.conversations = action.payload;
      state.error = "";
      state.status = "active";
    });
  },
});

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;

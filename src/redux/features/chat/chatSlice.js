import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS, api } from "../../../base/api";
const initialState = {
  conversations: [],
  error: "",
  status: "",
  activeConversation: {},
  notifications: [],
};

export const getConversations = createAsyncThunk(
  "conversation",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await api.get(ENDPOINTS.conversations, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getMessagesWithConversationId = createAsyncThunk(
  "getMessages",
  async (convoId, token) => {
    try {
      const { data } = await api.get(`${ENDPOINTS.messages}/${convoId}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ3YWY5Zjg5MjBkMWFkNzMwM2NjZTAiLCJpYXQiOjE3MTA3MDYzNTksImV4cCI6MTcxMDc5Mjc1OX0.eDiBip-uMuGmkj6aOMM-ElYXwzbQVnNxRb5GGQBWBDA`,
        },
      });

      return data.messages;
    } catch (error) {
      console.log(error);
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
    builder
      .addCase(getConversations.fulfilled, (state, action) => {
        state.conversations = action.payload;
        state.status = "active";
      })
      .addCase(getConversations.rejected, (state, action) => {
        console.log("action", action);
        state.error = action.error.message;
        state.status = "token might have expired";
      })
      .addCase(getMessagesWithConversationId.fulfilled, (state, action) => {
        console.log(action.payload);
        state.activeConversation = action.payload;
      });
    // .addCase(getMessagesWithConversationId.rejected, (state, action) => {
    //   state.activeConversation.error = "Failed";
    // });
  },
});

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;

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

      console.log("DATA", data);

      return data;
    } catch (error) {
      return rejectWithValue(error);
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
        console.log("action", action.payload);
        state.conversations = action.payload;
        state.status = "active";
      })
      .addCase(getConversations.rejected, (state, action) => {
        console.log("action", action);
        state.error = action.error.message;
        state.status = "token might have expired";
      });
  },
});

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;

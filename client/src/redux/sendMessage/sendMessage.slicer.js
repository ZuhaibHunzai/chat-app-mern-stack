import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./sendMessage.action";

const initialState = {
  status: "",
};

const sendMessageSlicer = createSlice({
  name: "sendMessage",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(sendMessage.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default sendMessageSlicer.reducer;

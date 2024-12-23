import { createSlice } from "@reduxjs/toolkit";
import { getInboxUsers } from "./action";

const initialState = {
  status: "",
  users: [],
};
const inboxSlicer = createSlice({
  name: "userslice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getInboxUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getInboxUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload;
    });
    builder.addCase(getInboxUsers.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default inboxSlicer.reducer;

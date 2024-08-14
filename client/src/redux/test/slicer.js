import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./action";

const initialState = {
  status: "",
  users: [],
};
const usersSlicer = createSlice({
  name: "userslice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default usersSlicer.reducer;

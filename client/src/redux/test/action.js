import { createAsyncThunk } from "@reduxjs/toolkit";
import { testApi } from "./api";

export const getUsers = createAsyncThunk("getusers", async () => {
  const res = await testApi();
  return res;
});

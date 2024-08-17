import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInboxApi } from "./api";

export const getInboxUsers = createAsyncThunk("getusers", async () => {
  const res = await getInboxApi();
  return res;
});

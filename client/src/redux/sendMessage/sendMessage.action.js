import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageAPI } from "./api";

export const sendMessage = createAsyncThunk("sendMesage", async (payload) => {
  const res = sendMessageAPI(payload);
  return res;
});

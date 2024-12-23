import { axiosClient } from "../../configs/axios";

export const sendMessageAPI = async (payload) => {
  const res = await axiosClient.post("/chat/send", payload);
  return res;
};

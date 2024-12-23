import { axiosClient } from "../../configs/axios";

export const getInboxApi = async () => {
  const res = await axiosClient.get("/chat/inbox");
  return res.data;
};

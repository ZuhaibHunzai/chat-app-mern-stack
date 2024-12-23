import axios from "axios";
const token = localStorage.getItem("chatApp-token");

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_HTTP_SERVER_HOST,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

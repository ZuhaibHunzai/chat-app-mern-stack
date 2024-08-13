import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_HTTP_SERVER_HOST,
});

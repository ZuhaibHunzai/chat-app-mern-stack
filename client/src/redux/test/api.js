import axios from "axios";

export const testApi = async () => {
  const res = await axios.get("https://api.github.com/users");
  return res.data;
};

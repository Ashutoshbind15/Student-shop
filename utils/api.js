import axios from "axios";

export const getProfile = async () => {
  const { data } = await axios.get(`/api/auth/profile`);
  return data;
};

export const editProfile = async (payload) => {
  await axios.put(`/api/auth/profile`, payload);
};

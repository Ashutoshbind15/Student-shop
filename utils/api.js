import axios from "axios";

export const getProfile = async () => {
  const { data } = await axios.get(`/api/auth/profile`);
  return data;
};

export const editProfile = async (payload) => {
  await axios.put(`/api/auth/profile`, payload);
};

export const getCart = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const editCart = async (id) => {
  await axios.put("/api/cart", id);
};

export const postCart = async (payload) => {
  await axios.post("/api/cart", payload);
};

export const deleteCart = async (payload) => {
  await axios.delete("/api/cart", { data: payload });
};

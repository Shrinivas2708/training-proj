import axios from "axios";

const api = axios.create({
  baseURL: "https://training-proj-1.onrender.com/api",
});

export const setAuthToken = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete api.defaults.headers.common["Authorization"];
};

export const products = {
  list: () => api.get("/products").then((r) => r.data),
  get: (id) => api.get(`/products/${id}`).then((r) => r.data),
};

export const auth = {
  register: (payload) =>
    api.post("/auth/register", payload).then((r) => r.data),
  login: (payload) => api.post("/auth/login", payload).then((r) => r.data),
};

export const cart = {
  add: (payload) => api.post("/cart/add", payload).then((r) => r.data),
  get: (userId) => api.get(`/cart/${userId}`).then((r) => r.data),
  remove: (userId, productId) =>
    api.delete(`/cart/remove/${userId}/${productId}`),
};

export const orders = {
  create: (payload) => api.post(`/orders/create`, payload).then((r) => r.data),
  userOrders: (userId) => api.get(`/orders/user/${userId}`).then((r) => r.data),
};

export default api;

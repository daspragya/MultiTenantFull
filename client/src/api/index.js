import axios from "axios";

const api = axios.create({
  baseURL: "https://fullMulti-api.onrender.com/api",
});

const auth = axios.create({
  baseURL: "http://localhost:8000/auth",
});

export const insertItem = (payload) => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = (id) => api.delete(`/item/${id}`);
export const getItemById = (id) => api.get(`/item/${id}`);
export const getAllItems = () => api.get(`/items`);

export const getCurrentUser = () => {
  const tenantStr = localStorage.getItem("tenantName");
  if (tenantStr !== undefined && tenantStr) return tenantStr;
  return null;
};

export const login = (payload) => auth.post(`/login`, payload);
export const signup = (payload) => auth.post(`/signup`, payload);
export const logout = () => auth.get(`/logout`);
export const getTenantNames = () => auth.get(`/tenantNames`);
export const switchTenant = (payload) => auth.post(`/switch`, payload);

api.interceptors.request.use(
  (config) => {
    const tenant = localStorage.getItem("tenantName");
    let authHeaders = `Bearer ${null}`;
    if (tenant) {
      authHeaders = `Bearer ${tenant}`;
    }
    const headers = {
      tenant: authHeaders,
    };
    config.headers = headers;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

const apis = {
  insertItem,
  getAllItems,
  updateItemById,
  deleteItemById,
  getItemById,
  getCurrentUser,
  login,
  logout,
  signup,
  getTenantNames,
  switchTenant,
};

export default apis;

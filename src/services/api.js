import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

// export const api = axios.create({
//   baseURL: "https://back-end-stackoverchill-793z.onrender.com",
// });

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

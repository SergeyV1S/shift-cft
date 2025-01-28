import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BASE_API_URL
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

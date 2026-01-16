import axios from "axios";
import { AUTH_API } from "./constants";
import { GetToken, RefreshToken } from "./tokens";

export const AxiosAuth = axios.create({
  baseURL: `${AUTH_API}`,
});

AxiosAuth.interceptors.request.use((config) => {
  const token = GetToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

AxiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status == 401) {
      const newAccessToken = await RefreshToken();
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return AxiosAuth(error.config);
    }
    return Promise.reject(error);
  }
);

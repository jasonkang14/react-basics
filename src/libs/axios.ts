import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://server.byeongjinkang.com",
  timeout: 8000,
});

axiosClient?.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default axiosClient;

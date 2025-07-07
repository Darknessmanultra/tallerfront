import axios from 'axios';

const ApiBackend = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
    },
    withCredentials: true,
});

ApiBackend.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


ApiBackend.interceptors.response.use(
  res => res,
  err => {
    const message =
      err.response?.data?.message ||
      err.response?.data?.title ||
      "An error occurred";

    return Promise.reject(new Error(message));
  }
);

export {ApiBackend};
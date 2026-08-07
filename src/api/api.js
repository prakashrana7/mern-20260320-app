"use client";

import config from "@/config";
import axios from "axios";

const api = axios.create({
    baseURL: config.apiUrl,
});

api.interceptors.request.use(
    (config) => {
        const authToken = 
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

        if (authToken){
            config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

// Handle API/server connection errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // API/backend is not running or cannot be reached
    if (!error.response) {
      toast.error("Failed to connect to server.");
    }

    return Promise.reject(error);
  }
);
export default api;
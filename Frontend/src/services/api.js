import axios from 'axios';

// Get base URL strictly from environment variable
const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach auth token to requests if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('bloomnest_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

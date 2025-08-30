import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000, // 10 second timeout
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for cookie-based authentication
axiosInstance.interceptors.request.use(
  (config) => {
    // No need to add tokens to headers since we're using cookies
    // The withCredentials: true setting will automatically include cookies
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle authentication errors
axiosInstance.interceptors.response.use(
  (response) => {
    // No need to store tokens since we're using cookies
    // Cookies are automatically managed by the browser
    return response;
  },
  (error) => {
    // Handle different types of errors
    if (error.code === 'ERR_SSL_PROTOCOL_ERROR' || error.code === 'ERR_NETWORK') {
      console.error('Connection error:', error.message);
      // You might want to show a user-friendly error message
      return Promise.reject(new Error('Unable to connect to server. Please check if the backend is running.'));
    }
    
    if (error.response?.status === 401) {
      // No need to clear localStorage since we're using cookies
      // The server should handle cookie expiration/invalidation
      // Optionally redirect to login
      if (window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

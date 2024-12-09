import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/hospitalmanagement';//3.80.135.141


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add request interceptor to set common headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['AUTH-TOKEN'] = `${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['DEVICE-TYPE'] = 'Web';
    return config;
  }
);

export default axiosInstance;

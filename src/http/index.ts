import axios from 'axios';

const baseURL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8000';

const http = axios.create({ 
  baseURL,
 });

 http.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export { http };
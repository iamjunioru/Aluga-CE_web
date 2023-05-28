import axios from 'axios';

const baseURL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8000';

export const http = axios.create({ 
  baseURL,
 });
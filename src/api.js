// src/api.js
import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost';
const API_URL = isLocalhost
  ? 'http://localhost:5000/api' // Local development API
  : 'https://loginacpw.onrender.com/api'; // Production API

const api = axios.create({
  baseURL: API_URL,
});

export default api;

// API Configuration
// Always uses VPS IP directly
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://213.136.91.78:5040';

export const API_ENDPOINTS = {
  RESERVATIONS: `${API_BASE_URL}/api/reservations`,
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
};

export default API_BASE_URL;


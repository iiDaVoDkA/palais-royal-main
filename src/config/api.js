// API Configuration
// Uses HTTPS backend subdomain
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://backend.palaisroyal.com.tn';

export const API_ENDPOINTS = {
  RESERVATIONS: `${API_BASE_URL}/api/reservations`,
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
};

export default API_BASE_URL;


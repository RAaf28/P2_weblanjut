import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);

import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getBerita = () => axios.get(`${API_URL}/berita`);

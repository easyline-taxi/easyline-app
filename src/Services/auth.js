import axios from 'axios'

const api = axios.create({
  baseURL: 'http://easyline.ml'
});

export default api;
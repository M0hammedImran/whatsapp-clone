import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:3210",
});

export default instance;
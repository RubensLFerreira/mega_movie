import axios from "axios";

const tmdb = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export default tmdb;

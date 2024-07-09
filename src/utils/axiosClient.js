import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosClient = axios.create({
  baseURL: `${baseURL}/api/`,
  withCredentials: true,
});

export default axiosClient;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.18.8:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

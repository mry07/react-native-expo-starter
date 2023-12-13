import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.18.8:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

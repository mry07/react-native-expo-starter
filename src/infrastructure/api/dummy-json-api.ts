import axios from "axios";

export const dummyJsonApi = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export type JsonPlaceholderApi = typeof dummyJsonApi;

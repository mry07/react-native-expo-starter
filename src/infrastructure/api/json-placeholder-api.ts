import axios from "axios";

export const jsonPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export type JsonPlaceholderInstance = typeof jsonPlaceholderApi;

import axios from "axios";

export const jsonPlaceholderApi = axios.create({
  baseURL: "jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export type JsonPlaceholderApi = typeof jsonPlaceholderApi;

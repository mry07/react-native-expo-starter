import axios from "axios";

const jsonPlaceholderApi = axios.create({
  baseURL: "jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default jsonPlaceholderApi;

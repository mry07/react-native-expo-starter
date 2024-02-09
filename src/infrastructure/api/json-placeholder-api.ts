import axios, { AxiosInstance } from "axios";
import { ApiRequestError, ApiResponseError } from "../../utility/exception";

const JsonPlaceholderApi = (): AxiosInstance => {
  /**
   * create axios instance
   */
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  /**
   * request interceptor
   */
  api.interceptors.request.use(
    (config) => {
      // log request
      if (__DEV__) {
        console.log("====================");
        console.log(
          "PAYLOAD\n\t" +
            config.baseURL +
            config.url +
            "\n\t" +
            (config.params ? JSON.stringify(config.params) : "'no params'") +
            "\n\t" +
            (config.data ? JSON.stringify(config.data) : "'no body'")
        );
        console.log("");
      }

      return config;
    },

    (error) => Promise.reject(error)
  );

  /**
   * response interceptor
   */
  api.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger

      // log response
      if (__DEV__) {
        console.log(
          "RESPONSE\n\t" +
            response.config.baseURL +
            response.config.url +
            "\n\t" +
            JSON.stringify(response.data)
        );
        console.log("====================");
      }

      return response;
    },

    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger

      if (error.response) {
        // log response error
        if (__DEV__) {
          console.error("RESPONSE\n\t" + JSON.stringify(error.response));
          console.log("====================");
        }

        const apiResponseError = new ApiResponseError(error.response);

        return Promise.reject(apiResponseError);
      }

      if (error.request) {
        // log request error
        if (__DEV__) {
          console.error("RESPONSE\n\t" + JSON.stringify(error.request));
          console.log("====================");
        }

        const apiRequestError = new ApiRequestError(error.request);

        return Promise.reject(apiRequestError);
      }

      // log error
      if (__DEV__) {
        console.error("RESPONSE\n\t" + error);
        console.log("====================");
      }

      return Promise.reject(error);
    }
  );

  return api;
};

export default JsonPlaceholderApi;

import { jsonPlaceholderApi } from "../json-placeholder-api";
import { ApiRequestError, ApiResponseError } from "../../../utility/exception";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const JsonPlaceholderInterceptor = ({ children }) => {
  /** **************************************** */

  // function

  const prerequest = async (config: InternalAxiosRequestConfig) => {
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
  };

  const errorPrerequest = async (error: any) => {
    return Promise.reject(error);
  };

  const tests = async (response: AxiosResponse) => {
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
  };

  const errorTests = async (error: any) => {
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
  };

  /** **************************************** */

  // render

  jsonPlaceholderApi.interceptors.request.use(prerequest, errorPrerequest);
  jsonPlaceholderApi.interceptors.response.use(tests, errorTests);

  return children;
};

export default JsonPlaceholderInterceptor;

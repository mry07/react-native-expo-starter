import { AxiosInstance } from "axios";

declare global {
  interface My {
    api?: AxiosInstance;
    loading?: (value: boolean) => void;
  }

  var my: My;
}

import { AxiosInstance } from "axios";

declare global {
  interface My {
    loading?: (value: boolean) => void;
  }

  var my: My;
}

import UserEntity from "../../../core/entities/user-entity";
import UserRemoteResource from "./user-remote-resource";
import { DummyJsonInstance } from "../../../infrastructure/api/dummy-json-api";
import AuthResponse from "../../models/auth-response";
import { AxiosInstance } from "axios";

const UserRemoteResourceImpl = (
  dummyJsonApi: DummyJsonInstance,
  jsonPlaceholderApi: AxiosInstance
): UserRemoteResource => ({
  login: async (username: string, password: string): Promise<AuthResponse> => {
    try {
      const { data } = await dummyJsonApi.post("/auth/login", {
        username,
        password,
      });

      return data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async (): Promise<UserEntity[]> => {
    try {
      const { data } = await jsonPlaceholderApi.get("/users");
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export default UserRemoteResourceImpl;

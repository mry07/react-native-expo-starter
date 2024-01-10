import UserEntity from "../../../core/entities/user-entity";
import UserRemoteResource from "./user-remote-resource";
import { JsonPlaceholderApi } from "../../../infrastructure/api/json-placeholder-api";

const UserRemoteResourceImpl = (
  jsonPlaceholderApi: JsonPlaceholderApi
): UserRemoteResource => {
  return {
    getUsers: async (): Promise<UserEntity[]> => {
      try {
        const { data } = await jsonPlaceholderApi.get("/users");
        return data;
      } catch (error) {
        throw error;
      }
    },
  };
};

export default UserRemoteResourceImpl;

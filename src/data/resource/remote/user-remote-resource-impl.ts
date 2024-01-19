import UserEntity from "../../../core/entities/user-entity";
import UserRemoteResource from "./user-remote-resource";
import { JsonPlaceholderInstance } from "../../../infrastructure/api/json-placeholder-api";

const UserRemoteResourceImpl = (
  jsonPlaceholderApi: JsonPlaceholderInstance
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

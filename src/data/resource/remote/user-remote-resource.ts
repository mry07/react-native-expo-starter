import UserEntity from "../../../core/entities/user-entity";
import { JsonPlaceholderApiTypes } from "../../../infrastructure/api/json-placeholder-api";

const UserRemoteResource = (jsonPlaceholderApi: JsonPlaceholderApiTypes) => {
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

export type UserRemoteResourceTypes = ReturnType<typeof UserRemoteResource>;

export default UserRemoteResource;

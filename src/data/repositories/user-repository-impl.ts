import UserEntity from "../../core/entities/user-entity";
import UserRepository from "./user-repository";
import UserRemoteResource from "../resource/remote/user-remote-resource";

const UserRepositoryImpl = (
  userRemoteResource: UserRemoteResource
): UserRepository => {
  return {
    getUsers: async (): Promise<UserEntity[]> => {
      return userRemoteResource.getUsers();
    },
  };
};

export default UserRepositoryImpl;

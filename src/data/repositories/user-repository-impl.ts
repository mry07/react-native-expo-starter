import UserEntity from "../../core/entities/user-entity";
import UserRepository from "./user-repository";
import UserRemoteResource from "../resource/remote/user-remote-resource";
import UserLocalResource from "../resource/local/user-local-resource";

const UserRepositoryImpl = (
  userLocalResource: UserLocalResource,
  userRemoteResource: UserRemoteResource
): UserRepository => {
  return {
    getUsers: async (): Promise<UserEntity[]> => {
      const data = userLocalResource.getUsers();
      console.log(data);

      return userRemoteResource.getUsers();
    },
  };
};

export default UserRepositoryImpl;

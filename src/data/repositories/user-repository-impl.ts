import UserEntity from "../../core/entities/user-entity";
import UserRepository from "./user-repository";
import UserRemoteResource from "../resource/remote/user-remote-resource";
import UserLocalResource from "../resource/local/user-local-resource";

const UserRepositoryImpl = (
  userLocalResource: UserLocalResource,
  userRemoteResource: UserRemoteResource
): UserRepository => ({
  login: async (username, password) => {
    return userRemoteResource.login(username, password);
  },

  getUsers: async (): Promise<UserEntity[]> => {
    const data = await userLocalResource.getUsers();
    console.log("data:", data);

    return userRemoteResource.getUsers();
  },
});

export default UserRepositoryImpl;

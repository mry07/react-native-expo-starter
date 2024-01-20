import UserEntity from "../../../core/entities/user-entity";
import AuthResponse from "../../models/auth-response";

type UserRemoteResource = {
  login: (username: string, password: string) => Promise<AuthResponse>;
  getUsers: () => Promise<UserEntity[]>;
};

export default UserRemoteResource;

import UserEntity from "../../core/entities/user-entity";
import AuthResponse from "../models/auth-response";

type UserRepository = {
  login: (username: string, password: string) => Promise<AuthResponse>;
  getUsers: () => Promise<UserEntity[]>;
};

export default UserRepository;

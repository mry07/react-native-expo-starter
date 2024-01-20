import AuthResponse from "../../data/models/auth-response";
import UserEntity from "../entities/user-entity";

type UserUseCase = {
  login: (username: string, password: string) => Promise<AuthResponse>;
  getUsers: () => Promise<UserEntity[]>;
};

export default UserUseCase;

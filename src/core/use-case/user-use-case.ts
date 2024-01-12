import UserEntity from "../entities/user-entity";

type UserUseCase = {
  getUsers: () => Promise<UserEntity[]>;
};

export default UserUseCase;

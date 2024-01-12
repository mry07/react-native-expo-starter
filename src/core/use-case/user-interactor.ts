import UserRepository from "../../data/repositories/user-repository";
import UserEntity from "../entities/user-entity";
import UserUseCase from "./user-use-case";

const UserInteractor = (userRepository: UserRepository): UserUseCase => {
  return {
    getUsers: async (): Promise<UserEntity[]> => {
      return userRepository.getUsers();
    },
  };
};

export default UserInteractor;

import UserEntity from "../../core/entities/user-entity";

type UserRepository = {
  getUsers: () => Promise<UserEntity[]>;
};

export default UserRepository;

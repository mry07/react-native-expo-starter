import UserEntity from "../../../core/entities/user-entity";

type UserLocalResource = {
  getUsers: () => Promise<UserEntity[]>;
};

export default UserLocalResource;

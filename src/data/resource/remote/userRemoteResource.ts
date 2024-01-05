import { UserEntity } from "../../../core/entities/user-entity";
import jsonPlaceholderApi from "../../../infrastructure/api/jsonPlaceholderApi";

export const getUsers = async (): Promise<UserEntity[]> => {
  try {
    const { data } = await jsonPlaceholderApi.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
};

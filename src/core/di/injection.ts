import UserUseCase from "../use-case/user-use-case";
import UserInteractor from "../use-case/user-interactor";
import UserRepositoryImpl from "../../data/repositories/user-repository-impl";
import UserRemoteResourceImpl from "../../data/resource/remote/user-remote-resource-impl";
import { jsonPlaceholderApi } from "../../infrastructure/api/json-placeholder-api";

export const userUseCase: UserUseCase = UserInteractor(
  UserRepositoryImpl(UserRemoteResourceImpl(jsonPlaceholderApi))
);

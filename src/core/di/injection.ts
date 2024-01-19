import ClientDatabase from "../../infrastructure/database/client-database";
import UserInteractor from "../use-case/user-interactor";
import UserRepositoryImpl from "../../data/repositories/user-repository-impl";
import UserLocalResourceImpl from "../../data/resource/local/user-local-resource-impl";
import UserRemoteResourceImpl from "../../data/resource/remote/user-remote-resource-impl";
import { jsonPlaceholderApi } from "../../infrastructure/api/json-placeholder-api";

const db = new ClientDatabase();

const userLocalResource = UserLocalResourceImpl(db);
const userRemoteResource = UserRemoteResourceImpl(jsonPlaceholderApi);

const userRepository = UserRepositoryImpl(
  userLocalResource,
  userRemoteResource
);

export const userUseCase = UserInteractor(userRepository);

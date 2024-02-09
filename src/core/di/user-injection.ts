import ClientDatabase from "../../infrastructure/database/client-database";
import UserInteractor from "../use-case/user-interactor";
import UserRepositoryImpl from "../../data/repositories/user-repository-impl";
import UserLocalResourceImpl from "../../data/resource/local/user-local-resource-impl";
import UserRemoteResourceImpl from "../../data/resource/remote/user-remote-resource-impl";
import { dummyJsonApi } from "../../infrastructure/api/dummy-json-api";
import JsonPlaceholderApi from "../../infrastructure/api/json-placeholder-api";

const db = ClientDatabase();
const jsonPlaceholderApi = JsonPlaceholderApi();

const userLocalResource = UserLocalResourceImpl(db);
const userRemoteResource = UserRemoteResourceImpl(
  dummyJsonApi,
  jsonPlaceholderApi
);

const userRepository = UserRepositoryImpl(
  userLocalResource,
  userRemoteResource
);

const userInjection = UserInteractor(userRepository);
export default userInjection;

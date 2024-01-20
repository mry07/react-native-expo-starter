import ClientDatabase from "../../infrastructure/database/client-database";
import UserInteractor from "../use-case/user-interactor";
import UserRepositoryImpl from "../../data/repositories/user-repository-impl";
import UserLocalResourceImpl from "../../data/resource/local/user-local-resource-impl";
import UserRemoteResourceImpl from "../../data/resource/remote/user-remote-resource-impl";
import { jsonPlaceholderApi } from "../../infrastructure/api/json-placeholder-api";
import { dummyJsonApi } from "../../infrastructure/api/dummy-json-api";

const db = new ClientDatabase();

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

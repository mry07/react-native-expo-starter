import UserEntity from "../../../core/entities/user-entity";
import ClientDatabase from "../../../infrastructure/database/client-database";
import UserLocalResource from "./user-local-resource";

const UserLocalResourceImpl = (db: ClientDatabase): UserLocalResource => {
  const connection = db.getConnection();

  return {
    getUsers: (): Promise<UserEntity[]> => {
      return new Promise((resolve, reject) => {
        connection.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM users",
            [],
            (_, { rows }) => {
              resolve(rows._array);
            },
            (_, error) => {
              reject(error);
              return false;
            }
          );
        });
      });
    },
  };
};

export default UserLocalResourceImpl;

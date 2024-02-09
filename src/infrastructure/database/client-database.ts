import * as SQLite from "expo-sqlite";
import { migrations } from "./migrations";

const ClientDatabase = (): SQLite.SQLiteDatabase => {
  try {
    const db = SQLite.openDatabase("react_native_expo_starter.db", "1.0");

    db.exec(migrations, false, (error, result) => {
      if (__DEV__) {
        if (error) {
          console.log("sqlite migration error:", error);
          return;
        }

        console.log("sqlite migration:", result.length);
      }
    });

    return db;
  } catch (error) {
    throw error;
  }
};

export default ClientDatabase;

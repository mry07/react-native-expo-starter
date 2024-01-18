import * as SQLite from "expo-sqlite";
import { migrations } from "./migrations";

class ClientDatabase {
  private db: SQLite.SQLiteDatabase;

  constructor() {
    this.db = SQLite.openDatabase("react_native_expo_starter.db", "1.0");

    this.db.exec(migrations, false, (error, result) => {
      if (error) {
        console.log("sqlite error:", error);
        return;
      }

      console.log("result:", result);
    });
  }

  getConnection() {
    return this.db;
  }
}

export default ClientDatabase;

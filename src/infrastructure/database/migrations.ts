import * as SQLite from "expo-sqlite";

export const migrations: SQLite.Query[] = [
  /**
   * users table
   */
  {
    sql: `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `,
    args: [],
  },

  /**
   * posts table
   */
  {
    sql: `
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id)
      );
    `,
    args: [],
  },
];

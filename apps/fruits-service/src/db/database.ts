import sqlite3 from "sqlite3";
import { open } from "sqlite";

const connectDB = async () => {

    const db = await open({
        filename: "fruits.db",
        driver: sqlite3.Database
    });


    await db.exec(`
        CREATE TABLE IF NOT EXISTS fruits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            addedBy TEXT NOT NULL
        );
    `);


    console.log("✅ SQLite Database Connected");

    return db;
};


export default connectDB;
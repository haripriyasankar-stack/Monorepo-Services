"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "users_db",
    password: "Postgres@27",
    port: 5432,
});
pool
    .connect()
    .then(() => {
    console.log("✅ PostgreSQL Connected");
})
    .catch((err) => {
    console.error("Database Connection Failed:", err);
});
exports.default = pool;

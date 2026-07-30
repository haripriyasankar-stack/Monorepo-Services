"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Postgres@27",
    database: "monorepo-db"
});
pool.connect()
    .then(() => {
    console.log("✅ PostgreSQL Connected");
})
    .catch((err) => {
    console.error(err);
});
exports.default = pool;

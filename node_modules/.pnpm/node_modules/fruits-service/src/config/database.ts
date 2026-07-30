import { Pool } from "pg";

const pool = new Pool({
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

export default pool;
import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Alpha@47",
    database: "MONOREPO-SERVICES",
});

pool.connect()
    .then(() => {
        console.log("✅ PostgreSQL Connected");
    })
    .catch((err) => {
        console.error(err);
    });

export default pool;
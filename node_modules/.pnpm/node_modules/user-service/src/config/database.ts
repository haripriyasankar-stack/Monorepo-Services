import { Pool } from "pg";

const pool = new Pool({
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

export default pool;
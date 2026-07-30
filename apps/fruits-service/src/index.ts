import app from "./app";
import pool from "./config/database";

const PORT = 3002;

pool.connect()
    .then((client) => {

        client.release();

        app.listen(PORT, () => {
            console.log(`Fruit service running on port ${PORT}`);
        });

    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
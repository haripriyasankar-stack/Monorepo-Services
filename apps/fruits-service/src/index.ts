import express from "express";
import app from "./app";
import pool from "./config/database";
import { expressMiddleware } from "@as-integrations/express5";
import {server} from "./graphql/server";

async function startServer() {
await server.start();

app.use(
    "/graphql",
    express.json(),
    expressMiddleware(server)
);

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
}
startServer();
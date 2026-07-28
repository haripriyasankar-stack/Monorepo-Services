import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import "./db/database";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("User Service Running");
});

app.use("/users", userRoutes);

export default app;
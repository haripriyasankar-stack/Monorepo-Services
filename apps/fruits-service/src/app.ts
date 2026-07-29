import express from "express";
import cors from "cors";
import fruitRoutes from "./routes/fruit.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/fruit", fruitRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Fruit Service Running"
    });
});

export default app;
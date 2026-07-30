"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fruit_routes_1 = __importDefault(require("./routes/fruit.routes"));
const express5_1 = require("@as-integrations/express5");
const server_1 = require("./graphql/server");
async function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    await server_1.server.start();
    app.use("/graphql", (0, express5_1.expressMiddleware)(server_1.server));
    app.use("/fruit", fruit_routes_1.default);
    app.get("/", (req, res) => {
        res.json({
            message: "Fruit Service Running"
        });
    });
    return app;
}

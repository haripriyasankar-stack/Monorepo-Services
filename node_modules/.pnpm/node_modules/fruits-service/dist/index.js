"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = __importDefault(require("./config/database"));
const PORT = 3002;
database_1.default.connect()
    .then((client) => {
    client.release();
    (0, app_1.createApp)().then((app) => {
        app.listen(PORT, () => {
            console.log(`Fruit service running on port ${PORT}`);
        });
    });
})
    .catch((error) => {
    console.error("Database connection failed:", error);
});

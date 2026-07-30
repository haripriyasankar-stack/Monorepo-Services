"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFruit = exports.updateFruit = exports.createFruit = exports.getFruitById = exports.getAllFruits = void 0;
const database_1 = __importDefault(require("../config/database"));
const api_client_1 = require("@fruit/api-client");
const getAllFruits = async () => {
    const result = await database_1.default.query("SELECT * FROM fruits ORDER BY id");
    return result.rows;
};
exports.getAllFruits = getAllFruits;
const getFruitById = async (id) => {
    const result = await database_1.default.query("SELECT * FROM fruits WHERE id=$1", [id]);
    return result.rows[0];
};
exports.getFruitById = getFruitById;
const createFruit = async (name, color, addedBy) => {
    const user = await (0, api_client_1.getUserById)(addedBy);
    if (!user) {
        throw new Error("User not found");
    }
    const result = await database_1.default.query(`INSERT INTO fruits(name,color,"addedBy")
         VALUES($1,$2,$3)
         RETURNING *`, [name, color, addedBy]);
    return result.rows[0];
};
exports.createFruit = createFruit;
const updateFruit = async (id, name, color, addedBy) => {
    const result = await database_1.default.query(`UPDATE fruits
         SET name=$1,
             color=$2,
             "addedBy"=$3
         WHERE id=$4
         RETURNING *`, [name, color, addedBy, id]);
    return result.rows[0];
};
exports.updateFruit = updateFruit;
const deleteFruit = async (id) => {
    const result = await database_1.default.query("DELETE FROM fruits WHERE id=$1 RETURNING *", [id]);
    return result.rowCount > 0;
};
exports.deleteFruit = deleteFruit;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const database_1 = __importDefault(require("../config/database"));
const getAllUsers = async () => {
    const result = await database_1.default.query("SELECT * FROM users ORDER BY id");
    return result.rows;
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    const result = await database_1.default.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};
exports.getUserById = getUserById;
const createUser = async (name, email) => {
    const result = await database_1.default.query(`
        INSERT INTO users(name,email)
        VALUES($1,$2)
        RETURNING *
        `, [name, email]);
    return result.rows[0];
};
exports.createUser = createUser;
const updateUser = async (id, name, email) => {
    const result = await database_1.default.query(`
        UPDATE users
        SET name=$1,
            email=$2
        WHERE id=$3
        RETURNING *
        `, [name, email, id]);
    return result.rows[0] || null;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const result = await database_1.default.query("DELETE FROM users WHERE id=$1", [id]);
    return result.rowCount > 0;
};
exports.deleteUser = deleteUser;

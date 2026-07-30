"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "http://localhost:3001";
async function getUserById(id) {
    const response = await axios_1.default.get(`${BASE_URL}/users/${id}`);
    return response.data;
}

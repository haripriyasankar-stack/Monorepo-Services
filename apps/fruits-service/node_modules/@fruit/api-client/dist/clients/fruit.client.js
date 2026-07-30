"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFruitById = getFruitById;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "http://localhost:3002";
async function getFruitById(id) {
    const response = await axios_1.default.get(`${BASE_URL}/fruits/${id}`);
    return response.data;
}

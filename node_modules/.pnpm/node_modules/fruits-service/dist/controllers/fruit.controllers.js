"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getFruit = exports.getFruits = void 0;
const fruitService = __importStar(require("../services/fruit.services"));
const api_client_1 = require("@fruit/api-client");
const getFruits = async (req, res) => {
    const fruits = await fruitService.getAllFruits();
    res.json(fruits);
};
exports.getFruits = getFruits;
const getFruit = async (req, res) => {
    const fruit = await fruitService.getFruitById(req.params.id);
    if (!fruit) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }
    res.json(fruit);
};
exports.getFruit = getFruit;
const create = async (req, res) => {
    const { name, color, addedBy } = req.body;
    if (!name || !color || !addedBy) {
        return res.status(400).json({
            message: "Name, color and addedBy are required"
        });
    }
    try {
        const user = await (0, api_client_1.getUserById)(addedBy);
        const fruit = await fruitService.createFruit(name, color, addedBy);
        res.status(201).json(fruit);
    }
    catch (error) {
        res.status(404).json({
            message: "unable to validate user"
        });
    }
};
exports.create = create;
const update = async (req, res) => {
    const { name, color, addedBy } = req.body;
    const fruit = await fruitService.updateFruit(req.params.id, name, color, addedBy);
    if (!fruit) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }
    res.json(fruit);
};
exports.update = update;
const remove = async (req, res) => {
    const deleted = await fruitService.deleteFruit(req.params.id);
    if (!deleted) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }
    res.json({
        message: "Fruit deleted successfully"
    });
};
exports.remove = remove;

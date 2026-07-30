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
exports.remove = exports.update = exports.create = exports.getUser = exports.getUsers = void 0;
const userService = __importStar(require("../services/user.services"));
const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    try {
        const id = String(req.params.id);
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
exports.getUser = getUser;
const create = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }
        const user = await userService.createUser(name, email);
        res.status(201).json(user);
    }
    catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const id = String(req.params.id);
        const { name, email } = req.body;
        const user = await userService.updateUser(id, name, email);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = String(req.params.id);
        const deleted = await userService.deleteUser(id);
        if (!deleted) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({
            message: "User deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
exports.remove = remove;

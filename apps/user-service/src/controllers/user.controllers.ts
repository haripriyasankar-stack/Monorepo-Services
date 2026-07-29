import { Request, Response } from "express";
import * as userService from "../services/user.services";

export const getUsers = async (
    req: Request,
    res: Response
) => {

    try {

        const users = await userService.getAllUsers();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

export const getUser = async (
    req: Request,
    res: Response
) => {

    try {

        const id = String(req.params.id);

        const user = await userService.getUserById(id);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

export const create = async (
    req: Request,
    res: Response
) => {

    try {

        const { name, email } = req.body;

        if (!name || !email) {

            return res.status(400).json({
                message: "Name and email are required"
            });

        }

        const user = await userService.createUser(
            name,
            email
        );

        res.status(201).json(user);

    } catch (error: any) {

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

export const update = async (
    req: Request,
    res: Response
) => {

    try {

        const id = String(req.params.id);

        const { name, email } = req.body;

        const user = await userService.updateUser(
            id,
            name,
            email
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

export const remove = async (
    req: Request,
    res: Response
) => {

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

    } catch (error) {

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};
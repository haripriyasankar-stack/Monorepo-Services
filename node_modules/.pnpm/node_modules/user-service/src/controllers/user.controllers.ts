import { Request, Response } from "express";
import * as userService from "../services/user.services";


export const getUsers = (
    req: Request,
    res: Response
) => {

    const users = userService.getAllUsers();

    res.json(users);

};


export const getUser = (
    req: Request,
    res: Response
) => {

    const id = String(req.params.id);

    const user = userService.getUserById(id);

    if (!user) {

        return res.status(404).json({
            message: "User not found"
        });

    }

    res.json(user);

};


export const create = (
    req: Request,
    res: Response
) => {

    const { name, email } = req.body;


    if (!name || !email) {

        return res.status(400).json({
            message: "Name and email are required"
        });

    }


    const user = userService.createUser(
        name,
        email
    );


    res.status(201).json(user);

};


export const update = (
    req: Request,
    res: Response
) => {

    const id = String(req.params.id);

    const { name, email } = req.body;


    const user = userService.updateUser(
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

};



export const remove = (
    req: Request,
    res: Response
) => {

    const id = String(req.params.id);


    const deleted = userService.deleteUser(id);


    if (!deleted) {

        return res.status(404).json({
            message: "User not found"
        });

    }


    res.json({
        message: "User deleted successfully"
    });

};
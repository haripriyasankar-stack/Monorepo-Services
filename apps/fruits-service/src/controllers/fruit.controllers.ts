import { Request, Response } from "express";
import * as fruitService from "../services/fruit.services";
import { getUserById } from "../clients/user.client";

export const getFruits = async (
     req: Request,
    res: Response
) => {

    const fruits = await fruitService.getAllFruits();

     const result = await Promise.all(
        fruits.map(async (fruit: any) => {
            const user = await getUserById(fruit.addedBy);
            return {
                ...fruit,
                user
        };
    })
);

    res.json(fruits);

};

export const getFruit = async (
    req: Request<{id: string}>,
    res: Response
) => {

    const fruit = await fruitService.getFruitById(req.params.id);
        
    if (!fruit) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }

    const user = await getUserById(String(fruit.addedBy));
    res.json({
        ...fruit,
        user
    });

};

export const create = async (
     req: Request,
    res: Response
) => {

    const {
        name,
        color,
        addedBy
    } = req.body;

    const user = await getUserById(String(addedBy));

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    const fruit = await fruitService.createFruit(
        name,
        color,
        addedBy
    );

    res.status(201).json(fruit);

};

export const update = async (
    req: Request<{id: string}>,
    res: Response
) => {

    const {
        name,
        color,
        addedBy
    } = req.body;

    const fruit = await fruitService.updateFruit(
        req.params.id,
        name,
        color,
        addedBy
    );

    if (!fruit) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }

    res.json(fruit);

};

export const remove = async (
     req: Request<{id: string}>,
    res: Response
) => {

    const deleted = await fruitService.deleteFruit(
        req.params.id
    );

    if (!deleted) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }

    res.json({
        message: "Fruit deleted successfully"
    });

};
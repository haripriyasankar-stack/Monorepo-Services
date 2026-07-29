import { Request, Response } from "express";
import * as fruitService from "../services/fruit.services";

export const getFruits = async (
     req: Request<{id: string}>,
    res: Response
) => {

    const fruits = await fruitService.getAllFruits();

    res.json(fruits);

};

export const getFruit = async (
    req: Request<{id: string}>,
    res: Response
) => {

    const fruit = await fruitService.getFruitById(
        req.params.id
    );

    if (!fruit) {
        return res.status(404).json({
            message: "Fruit not found"
        });
    }

    res.json(fruit);

};

export const create = async (
     req: Request,
    res: Response
) => {
    console.log("Request body:",req.body);

    const {
        name,
        color,
        addedBy
    } = req.body;

    if (!name || !color || !addedBy) {
        return res.status(400).json({
            message: "Name, color and addedBy are required"
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
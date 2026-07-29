import { Router } from "express";
import * as fruitController from "../controllers/fruit.controllers";

const router = Router();

router.get("/", fruitController.getFruits);

router.get("/:id", fruitController.getFruit);

router.post("/", fruitController.create);

router.put("/:id", fruitController.update);

router.delete("/:id", fruitController.remove);

export default router;
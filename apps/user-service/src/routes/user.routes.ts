import { Router } from "express";

import * as controller from "../controllers/user.controllers";

const router = Router();

router.get("/", controller.getUsers);

router.get("/:id", controller.getUser);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.remove);

export default router;
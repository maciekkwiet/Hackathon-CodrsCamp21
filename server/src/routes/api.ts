import { Router } from "express";
import { sessionController } from "@controllers/session";
import { taskTableController } from "@controllers/taskTable";
import { usersController } from "@controllers/getUsers";

const router = Router();

router.use("/session", sessionController);
router.use("/taskTable", taskTableController);
router.use("/users", usersController);

export { router as apiController };

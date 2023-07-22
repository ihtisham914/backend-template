import { Router } from "express";
import { UserRouter } from "./user.route";

export const mainRouter = Router();

mainRouter.use("/user", UserRouter);

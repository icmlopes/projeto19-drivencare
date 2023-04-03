import { Router } from "express";
import userRoutes from "./usersRoutes.js";

const routes = Router();

routes.use("/", userRoutes);

export default routes;

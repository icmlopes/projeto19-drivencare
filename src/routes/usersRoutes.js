import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/usersSchema.js";
import { newUser } from "../controllers/usersControllers.js";

const userRoutes = Router();

userRoutes.post("/signup", validateSchema(userSchema), newUser);

export default userRoutes;

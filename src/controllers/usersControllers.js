import { createUser } from "../services/userService.js";

export async function newUser(req, res, next) {
  const { name, cpf, phone, email, password } = req.body;

  try {
    await createUser({ name, cpf, phone, email, password });

    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

import { duplicatedEmailError } from "../errors/index.js";
import { create, findByEmail } from "../repositories/usersRepositories.js";
import bcrypt from "bcrypt";

export async function createUser({ name, cpf, phone, email, password }) {
  const { rowCount } = await findByEmail(email);
  if (rowCount) throw duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await create({
    name,
    cpf,
    phone,
    email,
    password: hashPassword,
  });
}

import { user } from "pg/lib/defaults";
import { notFoundError } from "../errors.js";
import { unauthorizedError } from "../errors.js";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer", "");

  if (!token) throw unauthorizedError();

  try {
    const {
      rows: [session],
    } = await userRepositories.findById(session.user_id);
    if (!user) throw notFoundError();

    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

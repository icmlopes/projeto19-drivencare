import { connectionDB } from "../config/database.js";

export async function create({ name, cpf, phone, email, password }) {
  return await connectionDB.query(
    `INSERT INTO users (name, cpf, phone, email, password) VALUES ($1, $2, $3, $4, $5)`,
    [name, cpf, phone, email, password]
  );
}

export async function findByEmail(email) {
  return await connectionDB.query(
    `
    SELECT * FROM users WHERE email = $1`,
    [email]
  );
}

export async function createSession({ token, user_id }) {
  return await connectionDB.query(
    `INSERT INTO sessions (token, user_id) VALUES ($1, $2)`,
    [token, user_id]
  );
}

export async function findSessionByToken(token) {
  return await connectionDB.query(`SELECT * FROM session WHERE token = $1`, [
    token,
  ]);
}

export async function findById(id) {
  return await connectionDB.query(`SELECT * FROM users WHERE id=$1`, [id]);
}

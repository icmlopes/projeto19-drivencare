import { conflictError } from "../errors/index.js";

export function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((datail) => datail.message);
      throw conflictError(errors);
    }
    next();
  };
}

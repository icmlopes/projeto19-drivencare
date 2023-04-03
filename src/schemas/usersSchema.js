import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().min(3).required(),
  cpf: joi
    .string()
    .pattern(
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
    )
    .required(),
  phone: joi.number().max(11).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

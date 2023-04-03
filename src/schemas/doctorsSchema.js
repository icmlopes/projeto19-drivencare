import joi from "joi";

export const doctorSchema = joi.object({
  crm: joi.number().required(),
});

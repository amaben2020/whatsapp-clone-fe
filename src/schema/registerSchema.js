import { date, number, object, string } from "yup";

export const registerSchema = object({
  name: string()
    .matches(/^ [a-zA-Z_ ]*$/, "FullName can contain underscore")
    .min(2, "Full name must be greater than 2 characters")
    .max(16, "Full name must be less than 16 characters")
    .required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

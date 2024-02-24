import { object, string } from "yup";

export const registerSchema = object({
  name: string()
    .min(2, "Full name must be greater than 2 characters")
    .max(16, "Full name must be less than 16 characters")
    .required(),
  status: string().required().max(64, "Status must be less than 64 chars"),
  email: string().email().required("Please enter your email address"),
  password: string()
    .required("Enter your password")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{6,}$/,
      "Password must contain 1 uppercase letter, 1 lowercase letter, 1 special character and 1 number,",
    ),
});

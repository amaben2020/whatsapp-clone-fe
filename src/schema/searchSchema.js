import { object, string } from "yup";

export const searchSchema = object({
  query: string().required("Please enter a search query"),
});

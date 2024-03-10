import { object, string } from "yup";

export const searchSchema = object({
  searchTerm: string().required("Please enter a search query"),
});

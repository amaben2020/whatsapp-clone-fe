import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:8000/api/v1",
  timeout: 30000,
};
export const ENDPOINTS = {
  conversations: "/conversations",
};

// method 2, just do you
// axios.defaults.baseURL = ""
export const api = axios.create(axiosConfig);

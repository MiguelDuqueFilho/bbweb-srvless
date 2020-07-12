import axios from "axios";
import { urls } from "./utils";

const api = axios.create({
  baseURL: urls.API_URL,
});

export default api;

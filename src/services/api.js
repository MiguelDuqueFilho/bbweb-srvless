import axios from "axios";
import { urls } from "./utils";

const api = axios.create({
  baseURL: `${urls.BASE_URL}`,
});

export default api;

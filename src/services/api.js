import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-explorer-94xe.onrender.com'
});
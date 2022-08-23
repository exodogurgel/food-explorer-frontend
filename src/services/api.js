import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-01.herokuapp.com'
});
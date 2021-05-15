import axios from "axios"
import {API, accessToken} from "../constants"

export const server = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json"
  },
})

server.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `${accessToken}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default server

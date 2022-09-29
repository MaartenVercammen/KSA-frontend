import axios from "axios";
import { Service } from "axios-middleware";

export const instanceLogin = axios.create({
  baseURL: process.env.API_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

export const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

export const instanceFile = axios.create({
  baseURL: process.env.API_URL,
  headers: { "Content-type": "multipart/form-data" },
  withCredentials: true,
});

const service = new Service(instance);

service.register({
  onResponseError(error) {
    console.log(error);
    if (error.message.search(401) != -1) {
      return Promise.reject({ message: "Unauthorized" });
    }
    return error;
  },
});

const serviceFile = new Service(instanceFile);

serviceFile.register({
  onResponseError(error) {
    console.log(error);
    if (error.message.search(401) != -1) {
      return Promise.reject({ message: "Unauthorized" });
    }
    return error;
  },
});

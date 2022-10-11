import axios from 'axios';
import { Service } from 'axios-middleware';

export const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-type': 'application/json' },
  withCredentials: true
});

export const instanceFile = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-type': 'multipart/form-data' },
  withCredentials: true
});

const serviceData = {
  onResponseError(error) {
    if (error.message.search(401) !== -1) {
      return Promise.reject({ message: 'Unauthorized' });
    }
    if (error.message.search(418) !== -1) {
      sessionStorage.removeItem('user');
    }
    return error;
  }
};

const service = new Service(instance);

service.register(serviceData);

const serviceFile = new Service(instanceFile);

serviceFile.register(serviceData);

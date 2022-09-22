import axios from 'axios';
import { Service } from 'axios-middleware';

export const instanceLogin = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true,
});

export const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true,
});

export const instanceFile = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-type' : 'multipart/form-data'},
    withCredentials: true,
})

const service = new Service(instance);

service.register({
  onResponseError(error) {
    if(error.message.search(505) != -1) sessionStorage.removeItem('user')
    return error;
  }
});
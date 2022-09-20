import axios from 'axios';

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


import axios from 'axios';
import { createHttp } from 'effector-http-api';

export const internalInstance = axios.create({
    baseURL: process.env.CLIENT_URL,
    withCredentials: true,
});

export const http = createHttp(internalInstance);

import baseAxios from 'axios';
import { envConfig } from 'configs';

const API_ENDPOINT = envConfig.apiEndpoint;

export const axios = baseAxios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosAuth = baseAxios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

import baseAxios from 'axios';
import { envConfig } from 'configs';

const API_ENDPOINT = envConfig.apiEndpoint;

/**
 * Create a base URL for axios
 * If you need to use axios, please import from this libs
 */
export const axios = baseAxios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Create a base URL for axios
 * If you need to use axios, please import from this libs
 */
export const axiosAuth = baseAxios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

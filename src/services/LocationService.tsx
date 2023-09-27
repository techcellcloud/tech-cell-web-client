import { rejects } from 'assert';
import axios, { AxiosInstance } from 'axios';
import { Districs, Province, Ward } from 'models/Location';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProvinces = () => instance.get<Array<Province>>('province');
export const getDistricts = (idProvince: number) =>
    instance.get<Array<Districs>>(`province/district/${idProvince}`);
export const getWards = (idDistrics: number) => instance.get<Array<Ward>>(`province/ward/${idDistrics}`);

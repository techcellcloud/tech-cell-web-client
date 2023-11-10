import axios, { AxiosInstance } from 'axios';
import { API_ENDPOINT } from '@constants/Services';
import { useSession } from 'next-auth/react';
import { useRefreshToken } from '@hooks/useRefreshToken';

const instanceAuth: AxiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

instanceAuth.interceptors.request.use((config) => {
    const { data: session } = useSession();
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${session?.user.accessToken}`;
    }
    return config;
});

instanceAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { data: session } = useSession();
        const refreshToken = useRefreshToken();
        const prevRequest = error.config;
        if (error.response.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true;
            await refreshToken();
            prevRequest.headers.authorization = `Bearer ${session?.user.accessToken}`;
            return instanceAuth(prevRequest);
        }
        return Promise.reject(error);
    },
);

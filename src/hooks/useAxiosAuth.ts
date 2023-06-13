'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { axiosAuth } from 'libs/axios';
import { useRefreshToken } from 'hooks/useRefreshToken';

export function useAxiosAuth() {
    const { data: session } = useSession();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use(
            (config) => {
                if (!config.headers.authorization) {
                    config.headers.authorization = `Bearer ${session?.user.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                const statusCode = error.response.status || error.response.statusCode;
                if (statusCode === 401 && !prevRequest.sent) {
                    prevRequest.sent = true;
                    await refreshToken();
                    prevRequest.headers.authorization = `Bearer ${session?.user.accessToken}`;
                    return axiosAuth(prevRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [session]);

    return axiosAuth;
}

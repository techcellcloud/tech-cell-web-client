'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { axiosAuth } from 'libs/axios';
import { useRefreshToken } from 'hooks/useRefreshToken';

/**
 *
 * Sử dụng libs.axios, không phải package axios
 *
 * Khi sử dụng hooks này:
 *  - Nếu response trả về status code là 401, sẽ tự động gọi vào hooks `useRefreshToken`
 * để nhận về token mới, khi nhận token mới thành công, gán token mới vào session của next-auth
 * tiếp tục gọi lại request đã bị fail trước đó với token mới đó
 *
 */
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

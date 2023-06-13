'use client';

import { useSession } from 'next-auth/react';
import { axios } from 'libs/axios';

/**
 * Gọi đến refresh token trên back-end để lấy về token mới
 * Gán refreshToken vào body
 * - POST:
 *   - body: refreshToken
 *  
 */
export function useRefreshToken() {
    const { data: session } = useSession();
    const refreshToken = async () => {
        const res = await axios.post(
            '/auth/refresh-token',
            {
                refreshToken: session?.user.refreshToken,
            },
            // {
            //     headers: {
            //         authorization: `Bearer ${session?.user.refreshToken}`,
            //     },
            // },
        );

        if (session) {
            session.user.accessToken = res.data.accessToken;
        }
    };

    return refreshToken;
}

'use client';

import { useAxiosAuth } from 'hooks';
import { signIn, signOut, useSession } from 'next-auth/react';
import useSWR from 'swr';
import { envConfig } from 'configs';

export default function Login() {
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth();
    const fetcherAuth = (url: string) => axiosAuth.get(url).then((res) => res.data);
    const { data, isLoading, error } = useSWR(envConfig.apiEndpoint + '/sample-auth', fetcherAuth);

    return (
        <>
            <p>Here is a test page of next-auth</p>
            {session?.user && (
                <>
                    <p>email: {session?.user?.email}</p>
                    <br />
                    <p>access token: {session?.user?.accessToken}</p>
                    <br />
                    <p>refresh token: {session?.user?.refreshToken}</p>
                </>
            )}
            {session?.user ? (
                <>
                    <button onClick={() => signOut()}>Log Out</button>
                </>
            ) : (
                <>
                    <button onClick={() => signIn()}>Sign In</button>
                </>
            )}

            <p>Data state: {isLoading && 'Data is loading...'}</p>
            <p>Data err: {error && error.toString()}</p>
            <p>Data sample: {data && data.message}</p>
        </>
    );
}

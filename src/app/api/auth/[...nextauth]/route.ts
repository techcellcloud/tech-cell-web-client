import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { envConfig } from 'configs';
import axios from 'axios';

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'giang@giaang.com',
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: '@password1234',
                },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string };
                const loginEndpoint = envConfig.apiEndpoint + '/auth/login';

                return axios
                    .post(loginEndpoint, { email, password })
                    .then((response) => {
                        return response.data.user;
                    })
                    .catch((error) => {
                        console.error(error.message);
                        return null;
                    });
            },
        }),
    ],
    secret: envConfig.nextAuth.secret,
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error',
    // },
});

export { handler as GET, handler as POST };

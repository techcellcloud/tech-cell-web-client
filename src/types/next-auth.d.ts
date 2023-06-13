import NextAuth from 'next-auth/next';
import { user } from './user.type';

declare module 'next-auth' {
    interface Session {
        user: user;
    }
}

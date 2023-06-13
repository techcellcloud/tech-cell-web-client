import NextAuth from 'next-auth/next';
import { user } from './user.type';

/**
 * Define types for scope `next-auth`
 * 
 * example: session.user
 * if not defined, ts can not know what is `user` in session ?
 * need to be defined here
 */
declare module 'next-auth' {
    interface Session {
        user: user;
    }
}

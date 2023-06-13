'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface SessionProviderProps {
    children: ReactNode;
}

const SessionNextAuthProvider = ({ children }: SessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default SessionNextAuthProvider;

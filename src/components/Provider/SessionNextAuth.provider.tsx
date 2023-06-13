'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface SessionProviderProps {
    children: ReactNode;
}

/**
 * Provider của next-auth,
 * Session sẽ được lưu ở đây
 *
 * Vì session sẽ được lưu ở client side, nên phải có cái dòng số 1 kia
 *
 */
const SessionNextAuthProvider = ({ children }: SessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default SessionNextAuthProvider;

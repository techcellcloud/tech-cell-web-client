"use client";

import { ThemeProvider } from '@mui/material';
import { theme } from 'components/Theme/MuiCustomTheme';
import React from 'react';

const ThemeProviderMui = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderMui;

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Stack,
} from '@mui/material';
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { MenuComponent, SearchComponent } from '@components/Form';
import { DRAWER_WIDTH, NAV_ITEMS } from '@constants/NavContants';
import { DrawerLayout } from '@components/Layout';
// import styles from 'styles/components/header.module.scss';

interface Props {
    window?: () => Window;
}

export const HeaderClient = (props: Props) => {
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: { xs: '56px', sm: '64px' } }}>
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: theme.color.red,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: { xs: 'space-around', lg: 'space-between' },
                        width: { lg: '1200px', xs: '390px' },
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            width: { xs: '130px', lg: '150px' },
                        }}
                    >
                        <Image
                            src="/logo-white.png"
                            alt="Logo Techcell"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={5}
                        sx={{ justifyContent: { xs: 'space-between' } }}
                    >
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            <SearchComponent />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                gap: '15px',
                                alignItems: 'center',
                            }}
                        >
                            {NAV_ITEMS.map((item, i) => (
                                <MenuComponent
                                    key={i}
                                    content={item.name}
                                    options={item?.menu}
                                    icon={item.icon ? <item.icon></item.icon> : undefined}
                                />
                            ))}
                        </Box>
                    </Stack>
                    <Box sx={{ display: { sx: 'block', lg: 'none' } }}>
                        <ShoppingCartIcon />
                    </Box>
                </Toolbar>
                <Box
                    sx={{
                        display: { xs: 'flex', lg: 'none' },
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            color: '#fff',
                            backgroundColor: '#F16464',
                            width: '320px',
                            margin: '5px 0px 5px 0px',
                            borderRadius: '5px',
                        }}
                    >
                        <SearchComponent />
                    </Box>
                </Box>
            </AppBar>
            <Box component="nav" sx={{}}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: DRAWER_WIDTH,
                            p: 2,
                        },
                    }}
                >
                    <DrawerLayout handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
};

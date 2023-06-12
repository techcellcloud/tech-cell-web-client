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
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import MenuComponent from 'components/Form/MenuComponent';
import { DRAWER_WIDTH, NAV_ITEMS } from 'constants/NavContants';
import SearchBox from 'components/Form/SearchComponent';
import DrawerLayout from 'components/Layout/DrawerLayout';

interface Props {
    window?: () => Window;
}

const HeaderClient = (props: Props) => {
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: theme.color.red }}>
                <Toolbar sx={{ justifyContent: { xs: 'flex-start', sm: 'space-between' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Image
                            src="/logo-white.png"
                            alt="Logo Techcell"
                            width={150}
                            height={50}
                        />
                    </Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={5}
                        sx={{ justifyContent: { xs: 'space-between' } }}
                    >
                        <SearchBox />
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                gap: '15px',
                                alignItems: 'center',
                            }}
                        >
                            {NAV_ITEMS.map((item, i) => (
                                <MenuComponent key={i} content={item.name} options={item?.menu} />
                            ))}
                        </Box>
                    </Stack>
                </Toolbar>
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

export default HeaderClient;

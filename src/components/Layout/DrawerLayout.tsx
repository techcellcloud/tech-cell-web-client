import React from 'react';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { NAV_ITEMS } from '@constants/NavContants';
import { MenuComponent } from '@components/Form';

interface Props {
    handleDrawerToggle: () => void;
}

export const DrawerLayout = ({ handleDrawerToggle }: Props) => {
    return (
        <Box sx={{ color: '#ee4949' }}>
            <Stack flexDirection="row" justifyContent="flex-start">
                <Image src="/logo-red.png" alt="Logo Techcell" width={150} height={50} />
            </Stack>
            {NAV_ITEMS.map((item, i) => (
                <MenuComponent
                    key={i}
                    content={item.name}
                    options={item?.menu}
                    icon={item.icon ? <item.icon></item.icon> : undefined}
                    isBlackContent
                />
            ))}
        </Box>
    );
};

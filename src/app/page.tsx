'use client';

import { BrandCategoryCompoment, ShopServicesComponent } from '@components/Form';
import ProductCard from '@components/ProductCard/ProductCard';
import {
    Box,
    Typography,
    Stack,
    Container,
    List,
    ListItemButton,
    ListItemText,
    withStyles,
    createTheme,
    Divider,
} from '@mui/material';
import styles from '@styles/components/home.module.scss';
import React, { MouseEvent, useState } from 'react';

export default function Home() {
    const [selectedTag, setSelectedTag] = useState('latest');

    const handleTagSelect = (event: React.MouseEvent, tag: string) => {
        setSelectedTag(tag);
    };
    return (
        <>
            {/* <CarouselComponent /> */}
            <ShopServicesComponent />
            <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
                <Box
                    sx={{
                        margin: '20px 0px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <Stack spacing={0} sx={{ alignItems: 'center' }}>
                        <List component="a" className={styles.horizontal_list}>
                            <ListItemButton
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                    '&.Mui-focusVisible': {
                                        backgroundColor: 'white',
                                    },
                                    ':hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                }}
                                selected={selectedTag === 'latest'}
                                onClick={(event) => handleTagSelect(event, 'latest')}
                            >
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                                        >
                                            Sản phẩm mới nhất
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                            <Divider
                                flexItem
                                orientation="vertical"
                                sx={{ mx: 0.5, my: 1, width: '1px' }}
                            />
                            <ListItemButton
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                    '&.Mui-focusVisible': {
                                        backgroundColor: 'white',
                                    },
                                    ':hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                }}
                                selected={selectedTag === 'best-selling'}
                                onClick={(event) => handleTagSelect(event, 'best-selling')}
                            >
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                                        >
                                            Bán chạy nhất
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                            <ListItemButton
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                    '&.Mui-focusVisible': {
                                        backgroundColor: 'white',
                                    },
                                    ':hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                }}
                                selected={selectedTag === 'featured'}
                                onClick={(event) => handleTagSelect(event, 'featured')}
                            >
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                                        >
                                            Sản phẩm nổi bật
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </List>
                        <hr className={styles.divider} />
                        <ProductCard />
                    </Stack>
                </Box>
            </Container>
            <BrandCategoryCompoment />
        </>
    );
}

'use client';

import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, Container, Grid, Pagination, Stack } from '@mui/material';

import CardComponent from '@components/Form/CardComponent';
import { BreadCrumbs } from '@components/Layout';

import BrandScrolling from './BrandScrolling';
import CategorySelect from './CategorySelect';
import SortingToolbar from './SortingToolbar';
import styles from '@styles/components/brands.module.scss';

import { Paging } from '@models/Common';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getAllProduct } from '@store/slices/productSlice';
import { getThumbnail } from 'utils';

interface ProductsPageProps {
    className?: string;
}

const Products: FC<ProductsPageProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const { products, isLoading } = useAppSelector((state) => state.product);
    const router = useRouter();

    const [searchProduct, setSearchProduct] = useState<Paging>(new Paging());

    useEffect(() => {
        dispatch(getAllProduct(searchProduct));
    }, [searchProduct]);

    const totalPage = typeof products.totalPage === "number" ? products.totalPage : parseInt(products.totalPage);

    const productData = products.data.map((product) => {
        return {
            id: product._id ?? '',
            name: product.name ?? '',
            category: product.category?.name ?? '',
            price: product.variations[0].price,
            image: getThumbnail(product.generalImages),
        };
    });

    console.log(productData);

    return (
        <>
            <BreadCrumbs />
            <Box marginTop="20px">
                <Container maxWidth="lg">
                    <Stack spacing={3}>
                        <Box sx={{ overflowX: 'auto' }}>
                            <BrandScrolling className={styles.list_brands.toString()} />
                            <CategorySelect />
                            <SortingToolbar className={styles.list_brands.toString()} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: '100%',
                                    borderRadius: '5px',
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: {
                                            lg: '15px 0px 15px 0px',
                                            xs: '0px 10px 0px 10px',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: { xs: 'space-around' },
                                        }}
                                    >
                                        <Grid
                                            container
                                            sx={{
                                                display: 'flex',
                                                justifyContent: {
                                                    sm: 'space-between',
                                                    xs: 'space-around',
                                                },
                                            }}
                                            spacing={5}
                                        >
                                            {productData.map((product) => (
                                                <Grid key={product.id} xs={6} lg={3} md={4}>
                                                    <CardComponent initialData={product} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <Pagination 
                                count={totalPage}
                                //variant='outlined'
                                shape='rounded'
                                sx={{
                                    marginLeft: "auto",
                                }}
                            />
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Products;

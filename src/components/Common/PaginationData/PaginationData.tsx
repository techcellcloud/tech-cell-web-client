import React, { ChangeEvent, FC } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardComponent from '@components/Form/CardComponent';
import { PriceModel } from '@models/Product';

interface PaginationProps {
    initialData?: {
        id: string;
        name: string;
        category: string;
        price: PriceModel;
        image: string;
    }[];
    pagingData: {
        page: number;
        totalPage: number;
    };
    handleChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const PaginationData: FC<PaginationProps> = ({ initialData, pagingData, handleChange }) => {



    return (
        <>
            <Stack spacing={3}>
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
                                    {initialData && initialData.map((product) => (
                                        <Grid item key={product.id} xs={6} lg={3} md={4}>
                                            <CardComponent initialData={product} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Pagination shape="rounded" onChange={handleChange} page={pagingData.page + 1} count={pagingData.totalPage} />
            </Stack>
        </>
    );
};

export default PaginationData;

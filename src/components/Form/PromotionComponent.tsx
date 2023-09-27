'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//import styles from '../../styles/components/product.module.scss';
import CardComponent from './CardComponent';

const productData = [
    {
        id: 1,
        name: 'OPPO Reno8 T 5G (8GB - 128GB)',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 2,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 2',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 3,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 3',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 4,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 4',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 5,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 4',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 6,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 5',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },

    {
        id: 7,
        name: 'OPPO Reno8 T 5G (8GB - 128GB) 6',
        img: '/product_img/phone1.webp',
        newPrice: 9490000,
        oldPrice: 9900000,
        promotion: 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
        rating: 5,
    },
];

export const PromotionComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
            }}
        >
            <Box sx={{ width: '1200px' }}>
                <Box
                    sx={{
                        maxWidth: '100%',
                        borderRadius: '5px',
                    }}
                >
                    <Box sx={{ padding: { lg: '15px 0px 15px 0px', xs: '0px 10px 0px 10px' } }}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around' } }}>
                            <Grid
                                container
                                sx={{
                                    display: 'flex',
                                    justifyContent: { sm: 'flex-start', xs: 'space-around' },
                                }}
                                spacing={5}
                            >
                                {productData.map((product) => (
                                    <Grid key={product.id} xs={6} lg={3} md={4}>
                                        <CardComponent
                                            id={product.id}
                                            name={product.name}
                                            img={product.img}
                                            newPrice={product.newPrice}
                                            oldPrice={product.oldPrice}
                                            promotion={product.promotion}
                                        />
                                    </Grid>
                                ))}
                                {/* <Grid xs={6} lg={3} md={4}>
                                    <CardComponent />
                                </Grid>
                                <Grid xs={6} lg={3} md={4}>
                                    <CardComponent />
                                </Grid>
                                <Grid xs={6} lg={3} md={4}>
                                    <CardComponent />
                                </Grid> */}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

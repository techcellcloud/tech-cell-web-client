'use client';

import React from 'react';
import { Box, Button, Container, Icon, IconButton, Paper, Rating, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import styles from 'styles/components/productCard.module.scss';
import styledButton from 'styles/components/button.module.scss';
import Image from 'next/image';
import {ShoppingCartOutlined, Favorite} from '@mui/icons-material';
import Link from 'next/link';

const testProducts = [
    {
        id: 1,
        title: "iphone 14 ProMax -Purple",
        brand: "Apple",
        rating: 4,
        price: '25.000.000 VND',
        image: 'https://res.cloudinary.com/dzoykqusl/image/upload/v1687249212/iphone_14_pro_depp_purple_cktkcp.webp',
    },
    {
        id: 1,
        title: "Galaxy S23 Ultra",
        brand: "Samsung",
        rating: 5,
        price: '26.990.000 VND',
        image: 'https://res.cloudinary.com/dzoykqusl/image/upload/v1687248940/s23-ultra-den_mplphq.webp',
    },
    {
        id: 1,
        title: "Black Shark 4 Pro",
        brand: "Xiaomi",
        rating: 3,
        price: '25.000.000 VND',
        image: 'https://res.cloudinary.com/dzoykqusl/image/upload/v1687249529/xiaomi-black-shark-4-pro_qcxss3.jpg',
    },
    {
        id: 1,
        title: "OPPO Find N2 Flip",
        brand: "Oppo",
        rating: 4,
        price: '19.000.000 VND',
        image: 'https://res.cloudinary.com/dzoykqusl/image/upload/v1687249388/n2_flip_-_combo_product_-_purple_epgork.webp',
    },
];

const ProductCard = () => {
    const handleAddToWishlist = () => {
        console.log('click the product');
    };
    const handleAddToCart = () => {
        console.log('product added to cart');
    };
    const handleBuyNow = () => {
        console.log('move to payment page');
    };
    return (
        <Grid 
            container
            spacing={3}
            rowSpacing={1}
            left={0}
            sx={{
                width: { xs: '390px', lg: '1200px', sm: '768px', md: '960px' },
                justifyContent: 'space-between',
                marginTop: '20px',
            }}
        >
            {testProducts.map((product, index) => (
                <Grid xs={12} lg={3} sm={6} md={4} key={index}>
                    <Paper elevation={3} square>
                        <div className={styles.product_card}>
                            <Stack alignItems={'center'} sx={{padding: "10px"}}>
                                <Link href="/">
                                    <Image
                                        src={product.image}
                                        alt="product"
                                        width={240}
                                        height={240}
                                    />
                                </Link>
                            </Stack>
                            <div className={styles.product_details}>
                                <Stack spacing={2}>
                                    <Stack spacing={1}>
                                        <Link href="/">
                                            <h6 className="brand">{product.brand}</h6>
                                        </Link>
                                        <Link href="/">
                                            <h4 className="product-title" onClick={() => {}}>
                                                {product.title}
                                            </h4>
                                        </Link>

                                        <Rating
                                            sx={{ marginTop: '5px', marginBottom: '20px' }}
                                            name="simple-controlled"
                                            size="small"
                                            value={product.rating}
                                            readOnly
                                        />
                                    </Stack>
                                    <p>{product.price}</p>
                                    <Stack direction="row" spacing={1} justifyContent="flex-start" className={styles.stack}>
                                        <Button
                                            className={styledButton.buy_now}
                                            variant="outlined"
                                            onClick={handleBuyNow}
                                        >
                                            Mua ngay
                                        </Button>
                                        <Tooltip title="Thêm vào giỏ hàng">
                                            <IconButton
                                                sx={{
                                                    'svg': { fontSize: '16px', },
                                                    border: '1px solid gray',
                                                    borderRadius: 0,
                                                    ':hover': {
                                                        'svg': { color: '#FFBF00', },
                                                        border: '1px solid #FFBF00',
                                                        backgroundColor: 'white',
                                                    }
                                                }}
                                                onClick={handleAddToCart}
                                            >
                                                <ShoppingCartOutlined />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Đánh dấu sản phẩm ưa thích">
                                            <IconButton
                                                sx={{
                                                    'svg': { fontSize: '16px', },
                                                    border: '1px solid gray',
                                                    borderRadius: 0,
                                                    ':hover': {
                                                        'svg': { color: '#ee4949', },
                                                        border: '1px solid #ee4949',
                                                        backgroundColor: 'white',
                                                    }
                                                }}
                                                className={styledButton.add_to_wishlist}
                                                onClick={handleAddToWishlist}
                                            >
                                                <Favorite />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Stack>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCard;

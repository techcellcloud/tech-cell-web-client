'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '../../styles/components/product.module.scss';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from 'next/link';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <Box
                sx={{
                    width: '1200px',
                    margin: '15px 0px 15px 0px',
                    height: '542px',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 10px #ee4949',
                }}
            >
                <Box sx={{ padding: '15px 0px 15px 0px' }}>
                    <Box
                        sx={{
                            marginBottom: '15px',
                            color: '#ee4949',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '15px',
                        }}
                    >
                        <LocalMallIcon sx={{ display: 'inline-block' }} />
                        <p className={styles.text_promotion}>Khuyến Mãi HOT</p>
                    </Box>
                    <Box>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Grid xs>
                                <div className={styles.product}>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.productInfo}>
                                            <Link href="">
                                                <div className={styles.productImgContent}>
                                                    <div className={styles.productImgitem}>
                                                        <Image
                                                            src="/product_img/phone1.webp"
                                                            width={160}
                                                            height={160}
                                                            alt="phone1"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className={styles.productNameproduct}>
                                                        OPPO Reno8 T 5G (8GB - 128GB)
                                                    </h3>
                                                </div>
                                                <div className={styles.productPrice}>
                                                    <div className={styles.productNewprice}>
                                                        9.490.000<sup>đ</sup>
                                                    </div>
                                                    <div className={styles.productOldprice}>
                                                        Giá cũ : 9.990.000
                                                        <sup>đ</sup>
                                                    </div>
                                                </div>
                                                <div className={styles.productContentpromotion}>
                                                    <div className={styles.productPromotion}>
                                                        <p>
                                                            Tặng thêm dịch vụ bảo hành Vip 12 tháng
                                                            1 đổi 1
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={styles.productRating}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className={styles.productWishlist}>
                                            <span>Yêu thích</span>
                                            <div className={styles.productIconheart}>
                                                <FavoriteIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs>
                            <Grid xs>
                                <div className={styles.product}>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.productInfo}>
                                            <Link href="">
                                                <div className={styles.productImgContent}>
                                                    <div className={styles.productImgitem}>
                                                        <Image
                                                            src="/product_img/phone1.webp"
                                                            width={160}
                                                            height={160}
                                                            alt="phone1"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className={styles.productNameproduct}>
                                                        OPPO Reno8 T 5G (8GB - 128GB)
                                                    </h3>
                                                </div>
                                                <div className={styles.productPrice}>
                                                    <div className={styles.productNewprice}>
                                                        9.490.000<sup>đ</sup>
                                                    </div>
                                                    <div className={styles.productOldprice}>
                                                        Giá cũ : 9.990.000
                                                        <sup>đ</sup>
                                                    </div>
                                                </div>
                                                <div className={styles.productContentpromotion}>
                                                    <div className={styles.productPromotion}>
                                                        <p>
                                                            Tặng thêm dịch vụ bảo hành Vip 12 tháng
                                                            1 đổi 1
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={styles.productRating}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className={styles.productWishlist}>
                                            <span>Yêu thích</span>
                                            <div className={styles.productIconheart}>
                                                <FavoriteIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            </Grid>
                            <Grid xs>
                                <Grid xs>
                                <div className={styles.product}>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.productInfo}>
                                            <Link href="">
                                                <div className={styles.productImgContent}>
                                                    <div className={styles.productImgitem}>
                                                        <Image
                                                            src="/product_img/phone1.webp"
                                                            width={160}
                                                            height={160}
                                                            alt="phone1"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className={styles.productNameproduct}>
                                                        OPPO Reno8 T 5G (8GB - 128GB)
                                                    </h3>
                                                </div>
                                                <div className={styles.productPrice}>
                                                    <div className={styles.productNewprice}>
                                                        9.490.000<sup>đ</sup>
                                                    </div>
                                                    <div className={styles.productOldprice}>
                                                        Giá cũ : 9.990.000
                                                        <sup>đ</sup>
                                                    </div>
                                                </div>
                                                <div className={styles.productContentpromotion}>
                                                    <div className={styles.productPromotion}>
                                                        <p>
                                                            Tặng thêm dịch vụ bảo hành Vip 12 tháng
                                                            1 đổi 1
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={styles.productRating}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className={styles.productWishlist}>
                                            <span>Yêu thích</span>
                                            <div className={styles.productIconheart}>
                                                <FavoriteIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            </Grid>
                            <Grid xs>
                                <Grid xs>
                                <div className={styles.product}>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.productInfo}>
                                            <Link href="">
                                                <div className={styles.productImgContent}>
                                                    <div className={styles.productImgitem}>
                                                        <Image
                                                            src="/product_img/phone1.webp"
                                                            width={160}
                                                            height={160}
                                                            alt="phone1"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className={styles.productNameproduct}>
                                                        OPPO Reno8 T 5G (8GB - 128GB)
                                                    </h3>
                                                </div>
                                                <div className={styles.productPrice}>
                                                    <div className={styles.productNewprice}>
                                                        9.490.000<sup>đ</sup>
                                                    </div>
                                                    <div className={styles.productOldprice}>
                                                        Giá cũ : 9.990.000
                                                        <sup>đ</sup>
                                                    </div>
                                                </div>
                                                <div className={styles.productContentpromotion}>
                                                    <div className={styles.productPromotion}>
                                                        <p>
                                                            Tặng thêm dịch vụ bảo hành Vip 12 tháng
                                                            1 đổi 1
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={styles.productRating}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className={styles.productWishlist}>
                                            <span>Yêu thích</span>
                                            <div className={styles.productIconheart}>
                                                <FavoriteIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

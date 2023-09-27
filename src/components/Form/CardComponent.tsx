import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/components/product.module.scss';

import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { PriceModel } from '@models/Product';
import { currencyFormat } from 'utils';

interface ProductDataProps {
    initialData: {
        id: string;
        name: string;
        category: string;
        price: PriceModel;
        image: string;
    }
}

const CardComponent: FC<ProductDataProps> = ({ initialData }) => {

    return (
        <div className={styles.product}>
            <div className={styles.productInfoContainer}>
                <Link href="/productdetail">
                    <div className={styles.productInfo}>
                        <div className={styles.productImgContent}>
                            <div className={styles.productImgitem}>
                                <Image
                                    src={initialData !== undefined ? initialData.image : "/product_img/phone1.webp"}
                                    width={160}
                                    height={160}
                                    alt="product thumbnail"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.productNameproduct}>
                                {initialData?.name}
                            </h3>
                        </div>
                        <div className={styles.productPrice}>
                            <div className={styles.productNewprice}>
                                {currencyFormat(initialData?.price.sale)}<sup>đ</sup>
                            </div>
                            <div className={styles.productOldprice}>
                                {currencyFormat(initialData?.price.base)}
                                <sup>đ</sup>
                            </div>
                        </div>
                        <div className={styles.productContentpromotion}>
                            <div className={styles.productPromotion}>
                                <p>Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1</p>
                            </div>
                        </div>
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
                </Link>
            </div>
        </div>
    );
};

export default CardComponent;

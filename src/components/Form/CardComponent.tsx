import React from 'react';
import styles from '@styles/components/product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';



const CardComponent = (props:any) => {
    return (
        <div className={styles.product}>
            <div className={styles.productInfoContainer}>
                <Link href={`/productdetail/${props.id}`}>
                    <div className={styles.productInfo}>
                        <div className={styles.productImgContent}>
                            <div className={styles.productImgitem}>
                                <Image
                                    src={props.img}
                                    width={160}
                                    height={160}
                                    alt="phone1"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.productNameproduct}>
                                {props.name}
                            </h3>
                        </div>
                        <div className={styles.productPrice}>
                            <div className={styles.productNewprice}>
                                {props.newPrice}<sup>đ</sup>
                            </div>
                            <div className={styles.productOldprice}>
                                {props.oldPrice}
                                <sup>đ</sup>
                            </div>
                        </div>
                        <div className={styles.productContentpromotion}>
                            <div className={styles.productPromotion}>
                                <p>{props.promotion}</p>
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

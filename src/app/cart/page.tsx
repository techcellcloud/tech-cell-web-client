'use client';

import { SelectAddressComponent } from '@components/Form';
// import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { apiGetPublicDistrics, apiGetPublicProvinces,apiGetPublicWard } from 'services/CartService';
import styles from '@styles/components/cart.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox, FormControlLabel, colors } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { pink, red } from '@mui/material/colors';

// export const metadata: Metadata = {
//     title: 'TechCell - Giỏ hàng',
// };

export default function Page() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setdistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [idProvince, setIdProvince] = useState();
    const [idDistrict, setIdDistrict] = useState();
    const [idwards, setIdWards] = useState();

    const [checked, setChecked] = useState(false);
    // const [checkedAll,setCheckAll] = useState(false)
    // const handleCheckAll = () => {
    //     setCheckAll(!checked);
    // }

    const [quanity, setQuanity] = useState(1);
    const handleUpquanity = () => {
        if (quanity < 10) {
            setQuanity((prevCount) => prevCount + 1);
        }
    };

    const handleDownquanity = () => {
        if (quanity > 1) {
            setQuanity((prevCount) => prevCount - 1);
        }
    };
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            console.log(response);
            setProvinces((response as { data: any; results: any })?.data.results);
        };
        fetchPublicProvince();
    }, []);

    useEffect(() => {
        const fetchPublicDisct = async () => {
            const response = await apiGetPublicDistrics(idProvince);
            console.log(response);
            setdistricts((response as { data: any; results: any })?.data.results);
        };

        idProvince && fetchPublicDisct();
    }, [idProvince]); // Add dependencies array if required

    useEffect(() => {
        const ftechPublicWards = async () => {
            const response = await apiGetPublicWard(idDistrict);
            console.log(response)
            setWards((response as { data: any; results: any })?.data.results)
        };
        idDistrict && ftechPublicWards();
    },[idDistrict]);

    console.log(idProvince, idDistrict,idwards);

    
    return (
        <>
            <div className={styles.cart_product}>
                <div className={styles.cart_container}>
                    <div className={styles.block_product}>
                        <div className={styles.cart_header}>
                            <div className={styles.go_to_back}>
                                <ArrowBackIcon />
                            </div>
                            <div className={styles.title}>Giỏ hàng của bạn</div>
                        </div>

                        <div className={styles.cart_checkbox}>
                            <FormControlLabel
                                label="Chọn tất cả"
                                control={
                                    <Checkbox
                                        defaultChecked
                                        // checked={checkedAll}
                                        // onChange={handleCheckAll}
                                        sx={{
                                            color: red[800],
                                            '&.Mui-checked': {
                                                color: red[600],
                                            },
                                        }}
                                    />
                                }
                            />
                        </div>

                        <div className={styles.cart_body}>
                            <div className={styles.body_content}>
                                <div className={styles.cart_content}>
                                    <div className={styles.product_cart}>
                                        <div className={styles.product_cart_check}>
                                            <Checkbox
                                                defaultChecked
                                                // checked={checked[1]}
                                                // onChange={handleCheckBox}
                                                onChange={() => setChecked(!checked)}
                                                sx={{
                                                    color: red[800],
                                                    '&.Mui-checked': {
                                                        color: red[600],
                                                    },
                                                }}
                                            />
                                        </div>
                                        <Image
                                            src="/img_productDetail/ip14_2.webp"
                                            width={80}
                                            height={80}
                                            alt="product"
                                        />
                                        <div className={styles.product_info}>
                                            <div className={styles.product_text}>
                                                <div className={styles.product_heading}>
                                                    Macbook Air M2 2022 256GB-Xám
                                                </div>
                                                <div className={styles.product_price}>
                                                    <div className={styles.product_price_new}>
                                                        26.690.000đ
                                                    </div>
                                                    <div className={styles.product_price_old}>
                                                        <span>32.990.000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.product_quanity}>
                                                <div
                                                    className={styles.product_quanity_btn}
                                                    onClick={handleDownquanity}
                                                >
                                                    -
                                                </div>
                                                <div className={styles.product_quanity_number}>
                                                    {quanity}
                                                </div>
                                                <div
                                                    className={styles.product_quanity_btn}
                                                    onClick={handleUpquanity}
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.product_cart_delete}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cart_promotions}>
                                    <div className={styles.cart_promotion_header}>
                                        <div className={styles.cart_promotion_icon}>
                                            <ShoppingBagIcon />
                                        </div>
                                        <div className={styles.cart_promotion_text}>
                                            Chương trình khuyến mãi
                                        </div>
                                    </div>
                                    <ul className={styles.cart_promotion_list}>
                                        <span></span>
                                        <li>
                                            Mua Office Home & Student 2021 kèm Macbook chỉ còn
                                            2,090,000
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.cart_buy_savings}>
                                    <div className={styles.cart_buy_header}>
                                        <div className={styles.cart_buy_header_icon}>
                                            <ShoppingBagIcon />
                                        </div>
                                        <div className={styles.cart_buy_header_text}>
                                            Mua kèm tiết kiệm hơn
                                        </div>
                                    </div>

                                    <div className={styles.cart_buy_list}>
                                        <div className={styles.cart_buy_card}>
                                            <div className={styles.card_product}>
                                                <div className={styles.card_product_img}>
                                                    <Image
                                                        src="/img_productDetail/ip14_2.webp"
                                                        width={70}
                                                        height={70}
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className={styles.card_product_name}>
                                                    Mua kèm bàn ghế công thái học
                                                </div>
                                                <div className={styles.card_product_discount}>
                                                    Giảm thêm 10%
                                                </div>

                                                <div className={styles.card_product_btn}>
                                                    Chọn sản phẩm
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.cart_buy_card}>
                                            <div className={styles.card_product}>
                                                <div className={styles.card_product_img}>
                                                    <Image
                                                        src="/img_productDetail/ip14_2.webp"
                                                        width={70}
                                                        height={70}
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className={styles.card_product_name}>
                                                    Mua kèm bàn ghế công thái học
                                                </div>
                                                <div className={styles.card_product_discount}>
                                                    Giảm thêm 10%
                                                </div>

                                                <div className={styles.card_product_btn}>
                                                    Chọn sản phẩm
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.cart_buy_card}>
                                            <div className={styles.card_product}>
                                                <div className={styles.card_product_img}>
                                                    <Image
                                                        src="/img_productDetail/ip14_2.webp"
                                                        width={70}
                                                        height={70}
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className={styles.card_product_name}>
                                                    Mua kèm bàn ghế công thái học
                                                </div>
                                                <div className={styles.card_product_discount}>
                                                    Giảm thêm 10%
                                                </div>

                                                <div className={styles.card_product_btn}>
                                                    Chọn sản phẩm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.customer_information}>
                                    <div className={styles.customer_information_header}>
                                        <div className={styles.customer_information_left}>
                                            <div className={styles.customer_information_icon}>
                                                <ShoppingBagIcon />
                                            </div>
                                            <div className={styles.customer_information_text}>
                                                Chọn hình thức nhận hàng
                                            </div>
                                        </div>

                                        <div className={styles.customer_information_right}>
                                            <div className={styles.check_right}>
                                                <div className={styles.check_delivery}>
                                                    Giao hàng tận nơi
                                                </div>
                                                <div className={styles.check_the_store}>
                                                    Nhận tại cửa hàng
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.customer_information_block}>
                                        <div className={styles.customer_information_content}>
                                            <div className={styles.content_header}>
                                                Thông tin khách hàng
                                            </div>

                                            <form>
                                                <div className={styles.form_user_phone}>
                                                    <input
                                                        type="text"
                                                        autoFocus
                                                        name="fullname"
                                                        placeholder="Họ và tên ( Bắt buộc )"
                                                    />
                                                    <input
                                                        type="text"
                                                        autoFocus
                                                        name="phonenumber"
                                                        placeholder="Số điện thoại ( Bắt buộc )"
                                                    />
                                                </div>
                                                <div className={styles.form_email}>
                                                    <input
                                                        type="email"
                                                        autoFocus
                                                        name="email"
                                                        placeholder="Email ( Bắt buộc )"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.delivery_address}>
                                    <div className={styles.delivery_address_content}>
                                        <div className={styles.delivery_addres_text}>
                                            Địa chỉ nhận hàng
                                        </div>
                                        <div className={styles.delivery_address_selected}>
                                            <SelectAddressComponent
                                                type="province"
                                                value={idProvince}
                                                setValue={setIdProvince}
                                                label={'Chọn Tỉnh Thành Phố'}
                                                options={provinces}
                                            />
                                            <SelectAddressComponent
                                                type="district"
                                                value={idDistrict}
                                                setValue={setIdDistrict}
                                                label={'Chọn Quận / Huyện'}
                                                options={districts}
                                            />

                                            <SelectAddressComponent
                                                type="ward"
                                                value={idwards}
                                                setValue={setIdWards}
                                                label={'Chọn Phường / Xã'}
                                                options={wards}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cart_buy}>
                    <div className={styles.cart_buy_content}>
                        <div className={styles.cart_buy_provisional}>Tạm tính : 0đ</div>
                        <div className={styles.cart_buy_now}>
                            <Button>Mua ngay</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

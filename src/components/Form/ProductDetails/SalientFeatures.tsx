import React, { FC, useState } from 'react';
import styles from '../../../styles/components/productdetail.module.scss';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { FormControlLabel } from '@mui/material';

interface DescriptionProps {
    content: string,
}

export const SalientFeatures: FC<DescriptionProps> = ({ content }) => {
    const [collapse, setCollapse] = useState(false);

    const handleChange = () => {
        setCollapse((prev) => !prev);
    };

    return (
        <>
            <Box className={styles.card_content_left} sx={{ position: 'relative', height: 'auto', }}>
                {/* <div className={styles.card_title_left}>
                    <h4>Đặc điểm nổi bật của iPhone 14 Pro Max</h4>
                </div> */}
                {/* <div className={styles.card_head_left}>
                    <ul>
                        <div className={styles.card_head_title}>
                            <span></span>
                            <li>
                                Màn hình Dynamic Island - Sự biến mất của màn hình tai
                                thỏ thay thế bằng thiết kế viên thuốc, OLED 6,7 inch, hỗ
                                trợ always-on display
                            </li>
                        </div>
                        <div className={styles.card_head_title}>
                            <span></span>
                            <li>
                                Cấu hình iPhone 14 Pro Max mạnh mẽ, hiệu năng cực khủng
                                từ chipset A16 Bionic
                            </li>
                        </div>

                        <div className={styles.card_head_title}>
                            <span></span>
                            <li>
                                Làm chủ công nghệ nhiếp ảnh - Camera sau 48MP, cảm biến
                                TOF sống động
                            </li>
                        </div>

                        <div className={styles.card_head_title}>
                            <span></span>
                            <li>
                                Pin liền lithium-ion kết hợp cùng công nghệ sạc nhanh
                                cải tiến
                            </li>
                        </div>
                    </ul>
                </div> */}
                <Box className={styles.card_body_left}>
                    <Box
                        className={`${styles.card_body_title} ${
                            collapse ? `${styles.expanded}` : ''
                        }`}
                    >
                        <Collapse in={collapse} collapsedSize={100}>
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        </Collapse>
                    </Box>

                    <div className={styles.card_btn}>
                        <button onClick={handleChange}>Xem Thêm</button>
                    </div>
                </Box>
            </Box>
        </>
    );
};

'use client';

import React from 'react';
import styles from 'styles/components/footer.module.scss';
import { Stack, Chip, useTheme, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';

const FooterClient = () => {
    const { color } = useTheme();
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLogo}>
                    <Stack>
                        <Image src="/logo-red.png" alt="Logo Techcell" width={150} height={50} />
                    </Stack>
                    <Stack direction="row" gap={2} alignItems="center">
                        <Chip
                            label="Đặt hàng"
                            sx={{ bgcolor: 'transparent', color: color.red }}
                            clickable
                        />
                        <Chip
                            label="Thử ngay"
                            sx={{ bgcolor: color.lightRed, color: color.red }}
                            clickable
                        />
                    </Stack>
                </div>
                <div className={styles.footerContent}>
                    <p>Về chúng tôi</p>
                    <ul>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                    </ul>
                </div>
                <div className={styles.footerContent}>
                    <p>Sản phẩm</p>
                    <ul>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                    </ul>
                </div>
            </div>
            <hr className={styles.footerDivider} />
            <div className={styles.footerBottom}>
                <Stack direction="row" gap={1}>
                    <IconButton sx={{ color: color.black }} aria-label="facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: color.black }} aria-label="instagram">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: color.black }} aria-label="youtube">
                        <YouTubeIcon />
                    </IconButton>
                </Stack>
                <span>
                    © TechCell Team VTC, 2023 - <b>Privacy Policy</b>
                </span>
            </div>
        </div>
    );
};

export default FooterClient;

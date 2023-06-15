'use client';
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import '../../styles/base/index.scss'

const CarouselComponent = () => {
    return (
        <Carousel autoplay>
            <div>
                <Image
                    src="/carousel_img/img1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="img1"
                />
            </div>
            <div>
                <Image
                    src="/carousel_img/im2.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="img2"
                />
            </div>
            <div>
                <Image
                    src="/carousel_img/img3.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="img3"
                />
            </div>
            <div>
                <Image
                    src="/carousel_img/img4.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="img4"
                />
            </div>
        </Carousel>
    );
};

export default CarouselComponent;

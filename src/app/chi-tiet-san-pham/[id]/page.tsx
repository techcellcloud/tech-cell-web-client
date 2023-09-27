'use client';

import React from 'react';
import { ProductDetail } from '@components/Form';
import { useParams } from 'next/navigation';
import {product} from '@components/Form/ProductDetails/product'



export default function Page() {
    // const { productId } = useParams();
    // const parsedProductId = parseInt(productId);
    // const products = productData.find((producta) => producta.id === parsedProductId);
    // console.log(productId);
    // console.log(productData);
    return (
        <div>
            {/* <h4>{products?.id}</h4> */}
            <ProductDetail />
        </div>
    );
}

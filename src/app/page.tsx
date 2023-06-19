'use client';

import { CarouselComponent, BrandCategoryCompoment ,PromotionComponent} from 'components/Form';
import { Box } from '@mui/material';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <CarouselComponent />
            <BrandCategoryCompoment />
            <Box sx={{width:'1200px' , margin:'0px auto'}}>
                <Image
                    src="/background_img/2.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' ,borderRadius:'5px'}}
                    alt="img1"
                />
            </Box>
            <PromotionComponent />
        </>
    );
}

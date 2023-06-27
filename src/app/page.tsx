'use client';

import { CarouselComponent, BrandCategoryCompoment ,PromotionComponent} from 'components/Form';
import { Box } from '@mui/material';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <CarouselComponent />
            <BrandCategoryCompoment />
            <Box sx={{margin:'0px auto'} }>
            <Box sx={{maxWidth:{lg:'100%', xs:'100%'},margin:{lg:'0px 159px 0px 159px',xs:'0px',sm:'0px',md:'0px'}}}>
                <Image
                    src="/background_img/2.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' ,borderRadius:'5px'}}
                    alt="img1"
                />
            </Box>
            </Box>
            <PromotionComponent />
        </>
    );
}

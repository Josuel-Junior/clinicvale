import React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box, useMediaQuery, useTheme } from '@mui/material'


import slide_carousel_mobile1 from "../../../../assets/images/slide_carousel_mobile1.webp"
import slide_carousel_mobile2 from "../../../../assets/images/slide_carousel_mobile2.webp"
import slide_carousel_mobile3 from "../../../../assets/images/slide_carousel_mobile3.webp"
import slide_carousel_mobile4 from "../../../../assets/images/slide_carousel_mobile4.webp"




import slide_carousel1 from "../../../../assets/images/slide_carousel1.webp"
import slide_carousel2 from "../../../../assets/images/slide_carousel2.webp"
import slide_carousel3 from "../../../../assets/images/slide_carousel3.webp"
import slide_carousel4 from "../../../../assets/images/slide_carousel4.webp"



interface IImagesCarousel {
    image: string;
    description: string;
}

export const CarouselComponent: React.FC = () => {


    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    const imageCrousel = [
        {
            image: isMatch ? slide_carousel_mobile1 : slide_carousel1,
            description: "Image1",
        },
        {
            image: isMatch ? slide_carousel_mobile2 : slide_carousel2,
            description: "Image2",
        },

        {
            image: isMatch ? slide_carousel_mobile3 : slide_carousel3,
            description: "Image3",
        },

        {
            image: isMatch ? slide_carousel_mobile4 : slide_carousel4,
            description: "Image4",
        }
    ]


    return (
        <Carousel
            autoPlay={true}
            cycleNavigation={true}
            swipe={true}
            indicators={false}
            animation={'fade'}
            duration={900}
            fullHeightHover={true}
            interval={4000}
            height="82vh"
        >
            {
                imageCrousel.map((itemImage: IImagesCarousel) => {
                    return (
                        <Box key={itemImage.description}>
                            <Box
                                component="img"
                                src={itemImage.image}
                                alt={itemImage.description}
                                key={itemImage.description}
                                sx={{ height: '80vh', width: '100%', filter: "brightness(40%)" }}
                                loading='lazy'
                            />
                        </Box>
                    )
                })
            }
        </Carousel>


    )
}
import React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/material'


import image1 from "../../../../assets/images/image1.png"
import image2 from "../../../../assets/images/image2.png"
import image3 from "../../../../assets/images/image3.png"
import image4 from "../../../../assets/images/image4.png"



interface IImagesCarousel {
    image: string;
    description: string;
}

export const CarouselComponent: React.FC = () => {

    const imageCrousel = [
        {
            image: image1,
            description: "Image1",
        },
        {
            image: image2,
            description: "Image2",
        },

        {
            image: image3,
            description: "Image3",
        },

        {
            image: image4,
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
            duration={800}
            fullHeightHover={true}
            interval={7000}
            height="82vh"
        >
            {
                imageCrousel.map((itemImage: IImagesCarousel) => {
                    return (
                        <Box>
                            <Box
                                component="img"
                                src={itemImage.image}
                                alt={itemImage.description}
                                key={itemImage.description}
                                sx={{ height: '80vh', width: '100%', filter: "brightness(40%)" }}
                            />
                        </Box>
                    )
                })
            }
        </Carousel>


    )
}
import React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/material'


import image1 from "../../../../assets/images/image1.png"
import image2 from "../../../../assets/images/image2.png"



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
        }
    ]


    return (


        <Carousel
            autoPlay={true}
            cycleNavigation={true}
            swipe={true}
            indicators={false}
            animation={'fade'}
            fullHeightHover={true}
        >
            {
                imageCrousel.map((itemImage: IImagesCarousel) => {
                    return (
                        <Box sx={{ width: "100vw", background: "red", height: "100vh" }}>
                            <Box component="img" src={itemImage.image} alt={itemImage.description} key={itemImage.description} sx={{ height: "100%", width: "100%" }} />
                        </Box>
                    )
                })
            }
        </Carousel>


    )
}
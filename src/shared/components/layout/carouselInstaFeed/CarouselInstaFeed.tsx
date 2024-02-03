import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Api } from "../../../services/api/Api";
import { Box, Container, Link, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { SkeletonCoponent } from "../../skeleton/Skeleton";


interface ApiResponse {
    id: string
    media_type: string
    media_url: string
    permalink: string
}

export const CarouselInstaFeed: React.FC = () => {

    const [dataInstaFeed, setDataInstaFeed] = useState<ApiResponse[]>()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const token = import.meta.env.VITE_TOKEN_INSTA
            const fields = "media_url,media_type,permalink";
            try {
                const response: AxiosResponse = await Api.get("access_token=", {
                    params: {
                        access_token: token,
                        fields: fields,
                    },
                });

                const { data } = response.data
                const images = data.filter((dataApi: ApiResponse) => dataApi.media_type === "IMAGE")
                setDataInstaFeed(images.slice(0, 9))
                setLoading(false)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <SkeletonCoponent heightSkeleton={230} widthSkeleton={220} numberOfSkeleton={4} />
        )
    }

    return (
        <Box sx={{ width: "100vw" }} maxWidth="lg">
            <Typography component="h2" variant="h3" sx={{
                fontSize: {
                    xs: "1.2rem",
                    sm: "1.4rem",
                    md: "1.6rem", fontWeight: "bold"

                }, textAlign: "center", my: "25px"
            }}>
                CONFIRA NOSSAS PUBLICAÇÕES
            </Typography>
            <Container>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {dataInstaFeed?.map((element: ApiResponse, index: number) => {
                        return (
                            <SwiperSlide>
                                <Link href={element.permalink} target="_blank" rel="noopener noreferrer">
                                    <Box component="img" src={element.media_url} sx={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </Box>


    )
}
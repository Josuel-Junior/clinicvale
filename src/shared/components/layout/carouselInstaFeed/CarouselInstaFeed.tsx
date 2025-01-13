import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Api } from "../../../services/api/Api";
import { Box, Container, Link, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { SkeletonCoponent } from "../../skeleton/Skeleton";

import { v4 as uuidv4 } from 'uuid';

import insfeed01 from "../../../../assets/images/instafeed01.webp";
import insfeed02 from "../../../../assets/images/instafeed02.webp";
import insfeed03 from "../../../../assets/images/instafeed03.webp";
import insfeed04 from "../../../../assets/images/instafeed04.webp";
import insfeed05 from "../../../../assets/images/instafeed05.webp";
import insfeed06 from "../../../../assets/images/instafeed06.webp";
import insfeed07 from "../../../../assets/images/instafeed07.webp";
import insfeed08 from "../../../../assets/images/instafeed08.webp";

interface ApiResponse {
  image: string;
  media_type?: string;
}

export const CarouselInstaFeed: React.FC = () => {
  const [dataInstaFeed, setDataInstaFeed] = useState<ApiResponse[]>();

  const [loading, setLoading] = useState<boolean>(true);


  const keyID = uuidv4();

  const imageInstafeed = [
    {
      image: insfeed01,
    },
    {
      image: insfeed02,
    },
    {
      image: insfeed03,
    },
    {
      image: insfeed04,
    },
    {
      image: insfeed05,
    },
    {
      image: insfeed06,
    },
    {
      image: insfeed07,
    },
    {
      image: insfeed08,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = import.meta.env.VITE_TOKEN_INSTA;
      const fields = "media_url,media_type,permalink";
      try {
        const response: AxiosResponse = await Api.get("access_token=", {
          params: {
            access_token: token,
            fields: fields,
          },
        });

        const { data } = response.data;
        const images = data.filter(
          (dataApi: ApiResponse) => dataApi.media_type === "IMAGE"
        );
        setDataInstaFeed(images.slice(0, 9));

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!loading) {
    return (
      <SkeletonCoponent
        heightSkeleton={230}
        widthSkeleton={220}
        numberOfSkeleton={4}
      />
    );
  }

  return (
    <Box sx={{ width: "100vw" }} maxWidth="lg">
      <Typography
        component="h2"
        variant="h3"
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
            fontWeight: "bold",
          },
          textAlign: "center",
          my: "25px",
        }}
      >
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
          {imageInstafeed?.map((element: ApiResponse) => {
            return (
              <SwiperSlide key={keyID}>
                <Link
                  href={"https://www.instagram.com/laboratorioclinicvale/?igsh=ajlodGE3ZmQ3NXZw#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    component="img"
                    src={element.image}
                    sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
                    loading="lazy"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import aboutWeImage from "../../../assets/images/aboutWeImage.png"
import InfoAboutWeImage from "../../../assets/images/InfoAboutWeImage.png"

import { Fade, Slide } from "react-awesome-reveal"

import { Parallax } from 'react-parallax';

import React from "react";

export const SectionAboutWe: React.FC = () => {


    return (
        <Box sx={{ mt: "40px" }}>
            <Grid container>
                <Grid xs={12} md={6}>
                    <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
                        <Typography component="h2" variant="h3" sx={{
                            fontSize: {
                                xs: "1.2rem",
                                sm: "1.6rem",
                                md: "1.8rem",

                            }, textAlign: "center"
                        }}>
                            BEM-VINDO AO LABORATÓRIO CLINIC VALE
                        </Typography>
                    </Fade>
                    <Slide triggerOnce>
                        <Typography sx={{ mt: "15px" }} paragraph>
                            No <span style={{ fontWeight: 'bold', color: "" }}>LABORATÓRIO CLINIC VALE, </span>estamos empenhados em oferecer serviços laboratoriais de
                            qualidade e confiabilidade, consolidando nossa posição como uma instituição comprometida com a excelência.
                            Nossa missão é conduzir análises
                            clínicas com superioridade, preservando os valores de responsabilidade social, sigilo e respeito aos nossos clientes.
                        </Typography>
                        <Typography sx={{ background: "" }} paragraph>
                            Adotamos uma política de qualidade rigorosa, buscando a constante evolução de
                            nosso Sistema de Gestão da Qualidade (SGQ). Buscamos não apenas atender, mas superar as expectativas
                            dos nossos clientes, proporcionando serviços de excelência em análises clínicas. Investimos incessantemente na
                            capacitação de nossa equipe e na adoção de tecnologias de ponta. Através
                            dessa busca ininterrupta pela qualidade, almejamos ser reconhecidos como o principal Laboratório de Análises
                            Clínicas na região.
                        </Typography>
                    </Slide>

                </Grid>
                <Grid xs={12} md={6}>
                    <Slide direction="right" triggerOnce>
                        <Box component="img" width="100%" src={aboutWeImage} />
                    </Slide>
                </Grid>

            </Grid>
        </Box>
    )
}
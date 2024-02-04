import { Box, Container, Typography } from "@mui/material";
import InfoAboutWeImage from "../../../assets/images/InfoAboutWeImage.png"



import { Parallax } from 'react-parallax';



export const InfoAboutWe: React.FC = () => {


    return (
        <Box >
            <Parallax blur={0} bgImage={InfoAboutWeImage} bgImageAlt="the cat" strength={200}>
                <Box sx={{ width: "100vw" }}>
                    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: '60vh' }}>


                        <Typography component="h2" sx={{
                            fontWeight: "bold",
                            textAlign: 'center',
                            fontSize: {
                                xs: "1rem",
                                sm: "1.5rem",
                                md: "1.7rem",

                            }, color: "#fff"
                        }}>
                            CONHEÇA TODAS AS NOSSAS UNIDADES DE COLETA
                        </Typography>
                        <Typography paragraph sx={{
                            fontSize: {
                                xs: ".9rem",
                                sm: ".9rem",
                                md: "1.1rem",

                            }, mt: "5px", color: "#fff"
                        }}>
                            No LABORATÓRIO CLINIC VALE, estabelecemos uma extensa rede de unidades de coleta, garantindo ampla cobertura para atender às necessidades de nossos pacientes. Nossa presença estratégica visa proporcionar conveniência e acessibilidade a todos, assegurando que nossos serviços estejam disponíveis para todos. Contamos com equipes altamente especializadas, dedicadas a oferecer um atendimento atencioso e eficiente a cada indivíduo que confia em nossos serviços.
                        </Typography>
                    </Container>
                </Box>
            </Parallax>


        </Box>


    )
}
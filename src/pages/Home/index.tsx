import { Box, Button, Icon, ListItemIcon, Typography, Container} from "@mui/material"
import { CarouselComponent } from "../../shared/components/layout/carousel/CarouselComponent"
import { Fade, Slide } from "react-awesome-reveal"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { infoCardHome } from "../../shared/constants/texts"
import { SectionAboutWe } from "./sectionAboutWe"
import { InfoAboutWe } from "./sectionInfoAboutWe/InfoAboutWe"
import { CarouselInstaFeed } from "../../shared/components/layout/carouselInstaFeed/CarouselInstaFeed"
import { ScrollRestoration, useNavigate } from "react-router-dom"
import { scroller } from 'react-scroll';





interface infoCard {
    title: string;
    iconMain: any;
    iconArrow: any;
}

export const Home: React.FC = () => {

  

    const navigate = useNavigate()

    const handleNavigate = (action: string) => {
        if (action == "Resultado de exames") {
            window.open('https://portal.worklabweb.com.br/resultados-on-line/234', '_blank');
        }
        else if (action === "Nossa Historia") {
            navigate("/aboutwe")
        }
        else if (action === "Unidades") {
            navigate("/units")
        }
        else if (action === "Novidades") {
            scroller.scrollTo('CarouselInstaFeed', {
                duration: 500,
                smooth: 'easeInOutQuad',
            });
        }
    }


    return (
        <Box sx={{width:"100vw"}}>
            <ScrollRestoration />
            <Box sx={{ position: "relative" }}>
                <CarouselComponent />
                <Box sx={{
                    position: 'absolute',
                    top: "50%",
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    zIndex: "3"
                }}>
                    <Box sx={{ textAlign: "center", width: "80vw", height: "100%" }}>
                        <Slide direction='up' cascade={true} damping={0}>
                            <Typography
                                sx={{
                                    fontWeight: "bold", fontSize: {
                                        xs: "1.5rem",
                                        sm: "2rem",
                                        md: "2.5rem",

                                    }, color: "#fff"
                                }}
                            >
                                Na Clinic Vale sua saúde é nossa prioridade
                            </Typography>
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.2rem",
                                        md: "1.4rem",

                                    }, color: "#fff"
                                }}
                            >
                                Descubra um novo padrão de precisão e cuidado
                            </Typography>
                        </Fade>
                        <Fade delay={2e3} cascade damping={1e-1}>
                            <Button variant="contained" sx={{ mt: "10px" }}>
                                Saiba mais
                            </Button>
                        </Fade>

                    </Box>
                </Box>
            </Box>
            <Container sx={{ mt: "-6%" }}>
                <Grid container maxWidth="lg" spacing={3}>
                    {infoCardHome.map((itemCard: infoCard, index: number) => {
                        return (
                            <Grid lg={3} md={4} xs={12} key={itemCard.title} sx={{ display: "flex", justifyContent: "center" }}>
                                <Fade delay={index * 500} triggerOnce cascade damping={1e-1} style={{ zIndex: 10 + index, position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Button sx={{
                                        background: "#FB8423", display: "flex", width: "100%", height: "190px", cursor: "pointer", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", padding: "10px", borderRadius: "15px", transition: "all .3s", "&:hover": {
                                            background: "#aa5913"
                                        }
                                    }} onClick={() => handleNavigate(itemCard.title)}>
                                        <Box component="img"
                                            src={`${itemCard.iconMain}`}
                                            alt={`Ícone de ${itemCard.title} da página`}
                                            sx={{ width: "60px" }}
                                            loading="lazy"
                                        />
                                        <Typography sx={{ color: "#fff", textTransform: "uppercase", fontSize: "1.3rem" }}>
                                            {itemCard.title}
                                        </Typography>
                                        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }} >
                                            <Icon sx={{ fontSize: "2.2rem", color: "#fff", }}>{itemCard.iconArrow}</Icon>
                                        </ListItemIcon>
                                    </Button>
                                </Fade>
                            </Grid>
                        )

                    })}
                </Grid>
                <SectionAboutWe />
            </Container>

            <InfoAboutWe />

            <Box id="CarouselInstaFeed" sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "60vh", my: "30px" }}>
                <CarouselInstaFeed />
            </Box>
        </Box>


    )
}
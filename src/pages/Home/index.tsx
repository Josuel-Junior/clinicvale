import { Box, Button, Icon, ListItemIcon, Typography, useTheme, useMediaQuery, Container, Paper } from "@mui/material"
import { CarouselComponent } from "../../shared/components/layout/carousel/CarouselComponent"
import { Fade, Slide } from "react-awesome-reveal"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { infoCardHome } from "../../shared/constants/texts"
import { SectionAboutWe } from "./sectionAboutWe"
import { InfoAboutWe } from "./sectionInfoAboutWe/InfoAboutWe"


interface infoCard {
    title: string;
    iconMain: any;
    iconArrow: any;
}

export const Home: React.FC = () => {

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <Box>
            <Box sx={{ position: "relative" }}>
                <CarouselComponent>
                </CarouselComponent>
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
                                    <Paper sx={{
                                        background: "#FB8423", display: "flex", width: "90%", height: "190px", cursor: "pointer", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", padding: "10px", borderRadius: "15px", transition: "all .3s", "&:hover": {
                                            background: "#aa5913"
                                        }
                                    }} elevation={12}>
                                        <Box component="img"
                                            src={`${itemCard.iconMain}`}
                                            alt={`${itemCard.title}`}
                                            sx={{ width: "60px" }}
                                            loading="lazy"
                                        />
                                        <Typography sx={{ color: "#fff", textTransform: "uppercase", fontSize: "1.3rem" }}>
                                            {itemCard.title}
                                        </Typography>
                                        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                                            <Icon sx={{ fontSize: "2.2rem", color: "#fff", }}>{itemCard.iconArrow}</Icon>
                                        </ListItemIcon>
                                    </Paper>
                                </Fade>
                            </Grid>
                        )

                    })}
                </Grid>
                <SectionAboutWe />
            </Container>

            <InfoAboutWe />
        </Box>


    )
}
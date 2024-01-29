import { Box, Typography } from "@mui/material"
import { CarouselComponent } from "../../shared/components/layout/carousel/CarouselComponent"
import { Fade, Slide } from "react-awesome-reveal"

export const Home: React.FC = () => {


    return (

        <Box sx={{ position: "relative" }}>

            <CarouselComponent>
            </CarouselComponent>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                zIndex: "10"
            }}>

                <Box sx={{ textAlign: "center", width:"80vw" }}>
                    <Slide direction='up' cascade={true} damping={0}>
                        <Typography
                            sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#fff" }}
                        >
                            Na Clinic Vale sua saúde é nossa prioridade
                        </Typography>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <Typography
                            sx={{ fontSize: "1.4rem", color: "#fff" }}
                        >
                            Descubra um novo padrão de precisão e cuidado
                        </Typography>
                    </Fade>
                </Box>
            </Box>
        </Box>


    )
}
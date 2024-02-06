import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Slide } from "react-awesome-reveal";


interface IInfoService {
    title: string;
    subTitle: string;
    image: any;
}

export const InfoService: React.FC<IInfoService> = ({ title, subTitle, image }) => {

    return (
        <Container >
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:"30px" }}>
                <Grid xs={12} md={6} sx={{ p: "15px" }}>
                    <Slide triggerOnce>
                        <Box component="img" src={image} height="100%" width="100%" borderRadius="15px" />
                    </Slide>
                </Grid>
                <Grid xs={12} md={6}>
                    <Slide direction="right" triggerOnce>
                        <Typography sx={{ textAlign: "center", my: "15px" }} variant="h5">
                            {title}
                        </Typography>
                        <Typography>
                            {subTitle}
                        </Typography>
                    </Slide>
                </Grid>
            </Grid>
        </Container>
    )
}
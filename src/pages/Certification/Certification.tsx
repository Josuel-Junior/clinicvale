import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial"
import certificationtImageInitialSection from "../../assets/images/certificationtImageInitialSection.png"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { infoCertification } from "../../shared/constants/texts"
import { Slide } from "react-awesome-reveal"
import { ScrollRestoration } from "react-router-dom"



interface ICertification {
    certification: string;
    iconCertification: any;
    text: string;
}

export const Certification: React.FC = () => {


    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <Box>
            <ScrollRestoration />
            <LayoutSectionInitial background={certificationtImageInitialSection} text="Certificações de Qualidade" subText=" Nosso compromisso com a excelência é respaldado por uma série de certificações reconhecidas internacionalmente. " />
            <Container>
                <Grid container>
                    {infoCertification.map((itemCertication: ICertification) => (
                        <Slide triggerOnce key={itemCertication.text}>
                            <Grid md={12} sx={{ display: "flex", alignItems: "center", my: "20px", boxShadow: 3, flexDirection: isMatch ? "column" : "flex" }} key={itemCertication.text}>
                                <Box component="img" src={itemCertication.iconCertification} sx={{ p: "10px" }} />
                                <Box sx={{ p: "15px" }}>
                                    <Typography sx={{ textAlign: "left", my: "10px", fontSize: { xs: "1.1rem" }, fontWeight: "bold" }} variant="h5" component="h2">
                                        {itemCertication.certification}
                                    </Typography>
                                    <Typography paragraph>
                                        {itemCertication.text}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Slide>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
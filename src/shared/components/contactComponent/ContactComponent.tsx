import { Box, Button, Container, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Slide } from "react-awesome-reveal"
import contactImage from "../../../assets/images/conactImage.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

interface IText {
    showText: boolean;
}


export const ContactComponent: React.FC<IText> = ({ showText }) => {
    return (
        <Container>
            <Grid container sx={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
                <Grid md={6} xs={12} sx={{ background: "", padding: "10px" }}>

                    {showText && (
                        <Slide triggerOnce>
                            <Typography sx={{ my: "20px" }}>
                                Bem-vindo à nossa página de contato! Estamos aqui para ajudar e responder a todas as suas
                                perguntas. Se você precisar de assistência ou informações adicionais, não hesite em entrar em contato conosco.
                            </Typography>
                        </Slide>
                    )}
                    <Slide triggerOnce>
                        <Grid md={12} sx={{ my: "7px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                                    AGENDAMENTOS
                                </Typography>
                                <Button variant="text" href={"tel:+553534561381"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                    <CalendarMonthIcon sx={{ color: "#4E598C", mr: "5px" }} />
                                    (35)3456-1381
                                </Button>
                            </Box>
                        </Grid>
                        <Divider />
                    </Slide>
                    <Slide triggerOnce>
                        <Grid md={12} sx={{ my: "7px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                                    WHATSAPP
                                </Typography>
                                <Button variant="text" href={"https://wa.me/553534561381"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                    <WhatsAppIcon sx={{ color: "#008000", mr: "5px" }} />
                                    (35)3456-1381
                                </Button>
                            </Box>
                        </Grid>
                        <Divider />
                    </Slide>
                    <Slide triggerOnce>
                        <Grid md={12} sx={{ my: "7px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                                    E-MAIL
                                </Typography>
                                <Button variant="text" href="mailto:contato@clinicvalelab.com?subject=Dúvida sobre Exames" aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                    <EmailIcon sx={{ color: "#FCB667", mr: "5px" }} />
                                    clinicvale@gmail.com
                                </Button>
                            </Box>
                        </Grid>
                    </Slide>
                </Grid>

                <Grid md={6} xs={0}>
                    <Slide direction='right' triggerOnce>
                        <Box component="img" src={contactImage} sx={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                    </Slide>

                </Grid>
            </Grid>
        </Container>

    )
}
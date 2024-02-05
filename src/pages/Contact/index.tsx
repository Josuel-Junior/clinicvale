
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import slide_carousel2 from "../../assets/images/contactImageInitialSection.png"
import contactImage from "../../assets/images/conactImage.png"
import { Box, Button, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { LayoutSectionInitial } from '../../shared/components/layout/layoutInitialSection/LayoutSectionInitial';

export const Contact: React.FC = () => {


    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <LayoutSectionInitial background={slide_carousel2} text="Entre em contato" subText='Nossa equipe de profissionais está pronta para atendê-lo.' />

            <Grid container maxWidth="lg" sx={{ width: "100%", height: "80vh", display: "flex", alignItems: "center" }}>
                <Grid md={6} xs={12} sx={{ background: "", padding: "10px" }}>
                    <Typography sx={{ my: "20px" }}>
                        Bem-vindo à nossa página de contato! Estamos aqui para ajudar e responder a todas as suas
                        perguntas. Se você precisar de assistência ou informações adicionais, não hesite em entrar em contato conosco.
                    </Typography>
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                AGENDAMENTOS
                            </Typography>
                            <Button variant="text" href={"tel:+553534561381"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <CalendarMonthIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                (35)3456-1381
                            </Button>
                        </Box>
                    </Grid>
                    <Divider />
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                WHATSAPP
                            </Typography>
                            <Button variant="text" href={"https://wa.me/553534561381"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <WhatsAppIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                (35)3456-1381
                            </Button>
                        </Box>
                    </Grid>
                    <Divider />
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                E-MAIL
                            </Typography>
                            <Button variant="text" href="mailto:contato@clinicvalelab.com?subject=Dúvida sobre Exames" aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <EmailIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                clinicvale@gmail.com
                            </Button>
                        </Box>
                    </Grid>



                </Grid>

                <Grid md={6} xs={0}>
                    <Box component="img" src={contactImage} sx={{ width: "100%", height: "100%", borderRadius: "15px" }} />

                </Grid>
            </Grid>
            <Box sx={{ width: "100vw", height: "70vh" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2657550811297!2d-45.51348686452581!3d-22.11959790065862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb0f25ebe2aaab%3A0x6f653f05899f6004!2sLaborat%C3%B3rio%20Clinic%20Vale%20%7C%20Matriz!5e0!3m2!1spt-BR!2sbr!4v1707140308302!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: "0" }} loading="lazy"></iframe>
            </Box>
        </Box>

    )
}
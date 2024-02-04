import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/layoutSectionInitial"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import slide_carousel2 from "../../assets/images/contactImage.png"
import { Box, Button, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

export const Contact: React.FC = () => {


    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <LayoutSectionInitial background={slide_carousel2} text="Contato" />

            <Grid container maxWidth="lg" sx={{ width: "100%", height: "80vh", display: "flex", alignItems: "center" }}>
                <Grid md={4} sx={{ background: "" }}>
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                AGENDAMENTOS
                            </Typography>
                            <Button variant="text" href={"https://www.instagram.com/laboratorioclinicvale/"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <CalendarMonthIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                (48) 3626-0014
                            </Button>
                        </Box>
                    </Grid>
                    <Divider />
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                WHATSAPP
                            </Typography>
                            <Button variant="text" href={"https://www.instagram.com/laboratorioclinicvale/"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <WhatsAppIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                (48) 3626-0014
                            </Button>
                        </Box>
                    </Grid>
                    <Divider />
                    <Grid md={12} sx={{ my: "7px" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                E-MAILS
                            </Typography>
                            <Button variant="text" href={"https://www.instagram.com/laboratorioclinicvale/"} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                <EmailIcon sx={{ color: "#4f4f4f", mr: "5px" }} />
                                (48) 3626-0014
                            </Button>
                        </Box>
                    </Grid>



                </Grid>

                <Grid md={8} sx={{ background: "red" }}>

                    <Typography>
                        teste
                    </Typography>

                </Grid>
            </Grid>
        </Box>

    )
}
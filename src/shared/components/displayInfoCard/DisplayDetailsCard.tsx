import React from 'react'

import { Box, Button, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'


import { Fade } from "react-awesome-reveal";

import Grid from '@mui/material/Unstable_Grid2/Grid2'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


interface IInfo {
    city: string;
    address: string;
    call: string;
    map: string;
    whatsapp: string;
    image?: any
}

interface IDetailsCard {
    details: IInfo[]
}

export const DisplayDetailsCard: React.FC<IDetailsCard> = ({ details }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (

        <Container sx={{ my: "10px" }}>

            {details.map((laboratory: IInfo, id: React.Key) => {
                const idNumber = Number(id)
                return (
                    <Grid container sx={{ minHeight: "50vh", my: "20px", boxShadow: 5 }} key={id}>
                        {idNumber % 2 === 0 && (
                            <Grid lg={6} xs={12} sx={{ display: "flex", justifyContent: "start", alignItems: "center", background: "", padding: "30px" }}>
                                <Fade direction={idNumber % 2 === 0 ? "left" : "right"} triggerOnce={true}>
                                    <Box component="img" width="100%" src={laboratory?.image} loading='lazy' />
                                </Fade>
                            </Grid>
                        )}

                        <Grid lg={6} xs={12} style={{ order: isMatch ? 2 : 1 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                            <Fade direction={idNumber % 2 === 0 ? "left" : "right"} triggerOnce={true}>
                                <Box sx={{ my: "10px" }}>
                                    <Typography component="h2" color="primary" variant='body1' sx={{ fontWeight: 'bold', textAlign: "center" }}>
                                        {laboratory.city}
                                    </Typography>
                                    <Typography component="h2" variant='body1' sx={{ textAlign: "center", my: "10px" }}>
                                        {laboratory.address}
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                        <Typography color="#4f4f4f" sx={{ fontWeight: "bold" }}>
                                            WHATSAPP
                                        </Typography>
                                        <Button variant="text" href={`https://wa.me/55${laboratory.whatsapp}`} aria-label="Link que direciona para o instagram" target="_blank" sx={{ color: "#4f4f4f" }}>
                                            <WhatsAppIcon sx={{ color: "#008000", mr: "5px" }} />
                                            {laboratory.call}
                                        </Button>

                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>
                        {idNumber % 2 === 1 && (
                            <Grid lg={6} xs={12} style={{ order: 1 }} sx={{ display: "flex", justifyContent: "end", alignItems: "center", padding: "30px" }}>
                                <Fade direction={idNumber % 2 === 0 ? "left" : "right"} triggerOnce={true}>
                                    <Box component="img" width="100%" src={laboratory.image} />
                                </Fade>
                            </Grid>
                        )}
                    </Grid>
                )
            })}
        </Container>
    )
}
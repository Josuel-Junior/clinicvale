import React, { useState } from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme, Box, Button } from "@mui/material"

import Logo from '../../../assets/logo_clinic_vale.svg'




export const NavBar: React.FC = () => {

    const itemNavBar = ["Home", "Contato", "Exames", "Sobre-Nós"]
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    const [buttonActive, setButtonActive] = useState<number>(0)

    function handleButtonActive(buttonActive: number) {

        setButtonActive(buttonActive)
    }

    const buttonStyle = {
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        borderRadius: "0px"
    };


    return (
        <AppBar sx={{ background: `${theme.palette.background.paper}`, display: "flex", alignItems: "center" }}>
            <Box maxWidth="lg" sx={{ background: "", display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Box component="img" src={`${Logo}`} sx={{ width: "50px", marginLeft: "20px" }} alt="Ícone JFC Tecnologia" loading="lazy" />
                {
                    isMatch ? (
                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            {/* <DrawerComponent /> */}
                        </Box>

                    ) :
                        <Toolbar>

                            <Box sx={{ display: "flex", gap: "20px" }}>
                                {itemNavBar.map((item: string, index: number) => {
                                    return (
                                        buttonActive === index ?
                                            <Button key={index} variant="text" style={buttonStyle} onClick={() => handleButtonActive(index)} sx={{
                                                color: "#aa5913", transition: "all .3s",
                                                "&:hover": {
                                                    color: "#aa5913"
                                                }, borderBottom: 1, borderColor: "#aa5913"

                                            }}>
                                                {item}
                                            </Button> : <Button key={index} variant="text" style={buttonStyle} onClick={() => handleButtonActive(index)} sx={{
                                                color: "#000", transition: "all .3s",
                                                "&:hover": {
                                                    color: "#aa5913"
                                                }, borderBottom: 0

                                            }}>
                                                {item}
                                            </Button>
                                    )
                                })}
                            </Box>

                            {/* <Tabs
                                textColor="primary"
                                sx={{textTransform:"capitalize"}}
                                TabIndicatorProps={{
                                    style: {
                                      backgroundColor: "#aa5913",
                                    },
                                }}
                            >
                                <Tab label="Home" sx={hoverTextNavBar}/>
                                <Tab label="Serviços" sx={hoverTextNavBar} />
                                <Tab label="Tecnologias" sx={hoverTextNavBar} />
                                <Tab label="Projetos" sx={hoverTextNavBar} />
                                <Tab label="Contato" sx={hoverTextNavBar} />
                                <Button>
                                    Exame
                                </Button>
                            </Tabs> */}
                        </Toolbar>

                }
            </Box>
        </AppBar>
    )
}
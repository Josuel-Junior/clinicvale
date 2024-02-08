import { Drawer, IconButton, List, ListItemButton, ListItemText, Box, } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../../assets/logo_clinic_vale.png'
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { navigateDrawer } from "../../constants/texts";




interface navigateDrawer {
    page: string;
    navigate: string;
}


export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const navigate = useNavigate()
    return (
        <Box sx={{ width: "100%" }}>

            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box component="img" src={`${Logo}`} sx={{ ml: "10px", my: "35px", height: "50px", width: "80%" }} alt="Ícone Clinic Vale Laboratório" loading="lazy" />
                <List>
                    {navigateDrawer.map((itensPage: navigateDrawer, index: number) => (
                        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemText onClick={() => navigate(`/${itensPage.navigate}`)} sx={{ borderBottom: 1 }}>
                                {itensPage.page}
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                aria-label="Botão para abrir o menu de opções"
            >
                <MenuIcon sx={{ color: "secondary" }} />
            </IconButton>


        </Box>

    )
}
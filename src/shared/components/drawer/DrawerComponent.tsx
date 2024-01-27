import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { Icon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SchoolIcon from '@mui/icons-material/School';

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { itemSubNavBar, navigateDrawer } from "../../constants/texts";




interface navigateDrawer {
    page: string
    iconPage?: string
    navigate: string
}


export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const [OpenSubButtonMenu, setOpenSubButtonMenu] = useState(false);


    const handleClick = () => {
        setOpenSubButtonMenu(!OpenSubButtonMenu);
    };

    const navigate = useNavigate()
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {navigateDrawer.map((itensPage: navigateDrawer, index: number) => (
                        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon >
                                <Icon>{itensPage.iconPage}</Icon>
                            </ListItemIcon>
                            <ListItemText onClick={() => navigate(`/${itensPage.navigate}`)}>
                                {itensPage.page}
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            {/* <SchoolIcon /> */}
                        </ListItemIcon>
                        <ListItemText>
                            Sobre Nós
                        </ListItemText>
                        {OpenSubButtonMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={OpenSubButtonMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {itemSubNavBar[0].map((element: string, index: number) => {
                                return (
                                    <ListItemButton sx={{ pl: 4 }} key={index}>
                                        <ListItemIcon>
                                            <SchoolIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            {element}
                                        </ListItemText>
                                    </ListItemButton>
                                )
                            })}

                        </List >
                    </Collapse>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} aria-labelledby="Abrir menu de opções">
                <MenuIcon sx={{ color: "secondary" }} id="Abrir menu de opções" />
            </IconButton>

        </>

    )
}
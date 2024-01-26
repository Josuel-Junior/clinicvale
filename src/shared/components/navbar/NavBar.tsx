import { useState } from "react";
import {
    AppBar,
    Toolbar,
    useMediaQuery,
    useTheme,
    Box, Button,
    Typography,
    Modal,
    Divider,
    Collapse
} from "@mui/material"

import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { infoAboutCompany, itemNavBar, itemSubNavBar } from "../../constants/texts";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// import Logo from '../../../assets/logo_clinic_vale.svg'
import Logo2 from '../../../assets/logo_clinic_vale2.png'

import CloseIcon from '@mui/icons-material/Close';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


interface IInfo {
    city: string;
    address: string;
    call: string;
    map: string;
    whatsapp: string;
}

export const NavBar: React.FC = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const [laboratory, setLaboratory] = useState<IInfo>(infoAboutCompany[0])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openModal, setModal] = useState(false);
    const [buttonActive, setButtonActive] = useState<number>(0)
    const [menuExpands, setMenuExpands] = useState<boolean[]>(Array(itemNavBar.length).fill(false));

    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSetlaboratory = (index: number) => {
        handleOpenAndCloseModal()
        handleCloseOptionsLaboratory()
        setLaboratory(infoAboutCompany[index])
    };

    const handleCloseOptionsLaboratory = () => setAnchorEl(null);

    const handleOpenAndCloseModal = () => setModal((prev) => !prev);

    const handleMenuExpand = (index: number, isExpanded: boolean) => {
        const newMenuExpands = [...menuExpands];
        newMenuExpands[index] = isExpanded;
        setMenuExpands(newMenuExpands);
    };

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                "rgb(55, 65, 81)",
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));



    const handleButtonActive = (buttonActive: number) => setButtonActive(buttonActive)

    const buttonStyle = {
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        borderRadius: "0px"
    };

    return (
        <AppBar sx={{ background: `${theme.palette.background.paper}`, display: "flex", alignItems: "center" }}>
            <Box maxWidth="lg" sx={{ background: "", width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }}>
                <Box sx={{ gap: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {!isMatch && (<Typography color="#4f4f4f" fontSize={{ md: "1rem" }}>{laboratory?.city}</Typography>)}
                    <Button variant="outlined" color="primary" size="small" href={"tel:+5535999007141"} target="_blank">
                        <PhoneAndroidIcon fontSize="small" color="primary" sx={{ mx: "5px" }} />
                        {laboratory?.call}
                    </Button>
                </Box>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    size="small"
                    sx={{ mx: "24px", my: "5px" }}
                >
                    Unidades
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseOptionsLaboratory}
                >
                    {infoAboutCompany.map((itemCityInfo: IInfo, index: number) => {
                        return (
                            <Box key={itemCityInfo.city}>
                                <MenuItem onClick={() => handleSetlaboratory(index)} disableRipple>
                                    <LocationOnIcon />
                                    {itemCityInfo.city}
                                </MenuItem>
                            </Box>
                        )
                    })}
                </StyledMenu>
            </Box>
            <Divider color="primary" />
            <Box maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", width: "100%", background: "" }}>
                <Box component="img" src={`${Logo2}`} sx={{ width: isMatch ? "200px" : "300px", mt: isMatch ? "0px" : "-40px", ml: "10px", background: "" }} alt="Ícone Clinic Vale Laboratório" loading="lazy" />
                {
                    isMatch ? (
                        <Box sx={{ display: "flex" }}>
                            {/* <DrawerComponent /> */}
                        </Box>

                    ) :
                        <Toolbar>
                            <Box sx={{ display: "flex", gap: "20px" }}>
                                {itemNavBar.map((item: string, index: number) => (
                                    <Box key={index} onMouseEnter={() => handleMenuExpand(index, true)}
                                        onMouseLeave={() => handleMenuExpand(index, false)}>
                                        <Button
                                            variant="text"
                                            size="small"
                                            style={buttonStyle}
                                            onClick={() => handleButtonActive(index)}
                                            sx={{
                                                color: buttonActive === index ? "#aa5913" : "#4f4f4f",
                                                transition: "all .3s",
                                                "&:hover": {
                                                    color: "#aa5913",
                                                },
                                                borderBottom: buttonActive === index ? 1 : 0,
                                                borderColor: "#aa5913",
                                            }}
                                        >
                                            {item}
                                        </Button>
                                        <Collapse in={menuExpands[index]} sx={{ position: "absolute" }}>
                                            <Box sx={{ background: "#fff", mt: "10px" }}>
                                                {index === 1 && itemSubNavBar[0].map((element: string, subIndex: number) => (
                                                    <MenuItem disableRipple sx={{ fontSize: ".9rem" }} key={element + subIndex}>
                                                        {element}
                                                    </MenuItem>
                                                ))}
                                                {index === 3 && itemSubNavBar[1].map((element: string, subIndex: number) => (
                                                    <MenuItem disableRipple sx={{ fontSize: ".9rem" }} key={element + subIndex}>
                                                        {element}
                                                    </MenuItem>
                                                ))}
                                            </Box>
                                        </Collapse>
                                    </Box>
                                ))}
                                <Button variant="contained">
                                    RESULTADO DE EXAMES
                                </Button>
                            </Box>
                        </Toolbar>
                }
            </Box>
            <Modal
                open={openModal}
                onClose={handleOpenAndCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    maxWidth: "70%",
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 5,
                    borderRadius: "15px"
                }}>
                    <Divider />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: "15px" }}>

                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                            Unidade: {laboratory.city}
                        </Typography>
                        <Box>
                            <Typography id="modal-modal-descriptionm" sx={{ mt: 2, fontSize: "1.1rem" }}>
                                Telefone: {laboratory.call}
                            </Typography>
                            <Typography id="modal-modal-descriptionmm" sx={{ mt: 2, fontSize: "1.1rem" }}>
                                Endereço:{laboratory.address}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%", my: "15px", flexDirection: isMatch ? "column" : "", alignItems: "center" }}>
                            <Button variant="contained" size="small" href={`https://wa.me/55${laboratory.whatsapp}`} target="_blank" sx={{
                                background: "#075E54", transition: "all .3s",
                                "&:hover": {
                                    background: "#04413a"
                                }, my: "10px", width: "160px"

                            }}>
                                <WhatsAppIcon fontSize="small" color="secondary" sx={{ mx: "5px", }} />
                                {laboratory.call}
                            </Button>
                            <Button variant="contained" size="small" href={"https://maps.app.goo.gl/PVWegh4NjMn9a9zD8"} target="_blank" sx={{ width: "160px" }}>
                                <LocationOnIcon fontSize="small" color="secondary" sx={{ mx: "5px", Width: "160px" }} />
                                Como chegar
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    <Button sx={{ position: "absolute", right: "0" }} onClick={handleOpenAndCloseModal}>
                        <CloseIcon />
                    </Button>
                </Box>
            </Modal>
        </AppBar>
    )
}
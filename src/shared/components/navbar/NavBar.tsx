import { useEffect, useState } from "react";
import { debounce } from 'lodash';
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
import { infoAboutCompany, itemSubNavBar } from "../../constants/texts";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Logo from '../../../assets/logo_clinic_vale.png'
// import Logo2 from '../../../assets/logo_clinic_vale2.png'

import CloseIcon from '@mui/icons-material/Close';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { DrawerComponent } from "../drawer/DrawerComponent";
import { useNavigate } from "react-router-dom";


interface IInfo {
    city: string;
    address: string;
    call: string;
    map: string;
    whatsapp: string;
    image?: any
}

export const NavBar: React.FC = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();

    const [openMouseHover, setOpenMouseHover] = useState<string | null>(String);

    const [laboratory, setLaboratory] = useState<IInfo>(infoAboutCompany[0])

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [openModal, setModal] = useState(false);

    const [buttonActive, setButtonActive] = useState("home");

    const openOptionsLaboratory = Boolean(anchorEl);

    const [isVisible, setIsVisible] = useState(true);


    const handleOpenOptionsLaboratory = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseHover = (event: string | null) => {
        setOpenMouseHover(event)
    }

    const handleSetlaboratory = (index: number) => {
        handleOpenAndCloseModal()
        handleCloseOptionsLaboratory()
        setLaboratory(infoAboutCompany[index])
    };

    const handleCloseOptionsLaboratory = () => setAnchorEl(null);

    const handleOpenAndCloseModal = () => setModal((prev) => !prev);

    const toggleVisibility = debounce(() => {
        const scrollHeight = window.scrollY;
        if (Math.round(scrollHeight) > 0) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, 200);

    const handleNavigateButton = (buttonActive: string) => {
        setButtonActive(buttonActive)
        navigate(`/${buttonActive}`)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);



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

    const buttonStyle = {
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        borderRadius: "0px"
    };

    const paramsNavigate = [["aboutwe", "units"], ["servicepeople", "serviceforcompany"]]



    return (
        <AppBar sx={{ background: `${theme.palette.background.paper}`, display: "flex", alignItems: "center" }}>
            <Collapse in={isVisible} timeout={500} sx={{ maxWidth: "1200px", width: "100%" }}>
                <Box maxWidth="lg" sx={{ width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }}>
                    <Box sx={{ gap: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {!isMatch && (<Typography color="#4f4f4f" fontSize={{ md: "1rem" }}>{laboratory?.city}</Typography>)}
                        <Button variant="outlined" color="primary" size="small" href={"tel:+5535999007141"} target="_blank">
                            <PhoneAndroidIcon fontSize="small" color="primary" sx={{ mx: "5px" }} />
                            {laboratory?.call}
                        </Button>
                    </Box>
                    <Button
                        id="demo-customized-button"
                        aria-controls={openOptionsLaboratory ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openOptionsLaboratory ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleOpenOptionsLaboratory}
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
                        open={openOptionsLaboratory}
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
            </Collapse>
            <Divider color="primary" />
            <Box maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", width: "100%",alignItems:"center", background: "" }}>
                <Box component="img" src={`${Logo}`} sx={{  ml: "10px", my:"5px", height: "40px" }} alt="Ícone Clinic Vale Laboratório" loading="lazy" />
                {
                    isMatch ? (
                        <Box sx={{ display: "flex" }}>
                            <DrawerComponent />
                        </Box>
                    ) :
                        <Toolbar>
                            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                <Button
                                    variant="text"
                                    style={buttonStyle}
                                    onClick={() => handleNavigateButton("home")}
                                    sx={{
                                        fontSize: ".8rem", color: buttonActive === "home" ? "#aa5913" : "#4f4f4f",
                                        transition: "all .3s",
                                        "&:hover": {
                                            color: "#aa5913", fontWeight: "bold"
                                        },
                                        borderBottom: buttonActive === "home" ? 1 : 0,
                                        borderColor: "#aa5913"
                                    }}
                                >
                                    Home
                                </Button>
                                <Box onMouseEnter={() => handleMouseHover("sobreNos")}
                                    onMouseLeave={() => handleMouseHover(null)}
                                >
                                    <Button
                                        variant="text"
                                        style={buttonStyle}
                                        onClick={() => handleNavigateButton("aboutwe")}

                                        sx={{
                                            fontSize: ".8rem", color: buttonActive === "aboutwe" ? "#aa5913" : "#4f4f4f",
                                            transition: "all .3s",
                                            "&:hover": {
                                                color: "#aa5913",
                                            },
                                            borderBottom: buttonActive === "aboutwe" ? 1 : 0,
                                            borderColor: "#aa5913", fontWeight: "bold"
                                        }}
                                    >
                                        Sobre Nós
                                    </Button>
                                    <Collapse in={openMouseHover === "sobreNos"} sx={{ position: "absolute", background: "#fff" }}>
                                        {itemSubNavBar[0].map((element: string, index: number) => (
                                            <MenuItem disableRipple sx={{ fontSize: ".9rem" }} key={element} onClick={() => handleNavigateButton(paramsNavigate[0][index])}>
                                                {element}
                                            </MenuItem>
                                        ))}
                                    </Collapse>
                                </Box>

                                <Button
                                    variant="text"
                                    style={buttonStyle}
                                    onClick={() => handleNavigateButton("certification")}
                                    sx={{
                                        fontSize: ".8rem", color: buttonActive === "certification" ? "#aa5913" : "#4f4f4f",
                                        transition: "all .3s",
                                        "&:hover": {
                                            color: "#aa5913",
                                        },
                                        borderBottom: buttonActive === "certification" ? 1 : 0,
                                        borderColor: "#aa5913", fontWeight: "bold"
                                    }}
                                >
                                    Certificados
                                </Button>
                                <Box key="Serviços" onMouseEnter={() => handleMouseHover("servicepeople")}
                                    onMouseLeave={() => handleMouseHover(null)}>
                                    <Button
                                        variant="text"
                                        style={buttonStyle}
                                        onClick={() => handleNavigateButton("servicepeople")}
                                        sx={{
                                            fontSize: ".8rem", color: buttonActive === "servicepeople" ? "#aa5913" : "#4f4f4f",
                                            transition: "all .3s",
                                            "&:hover": {
                                                color: "#aa5913",
                                            },
                                            borderBottom: buttonActive === "servicepeople" ? 1 : 0,
                                            borderColor: "#aa5913", fontWeight: "bold"
                                        }}
                                    >
                                        Serviços
                                    </Button>

                                    <Collapse in={openMouseHover === "servicepeople"} sx={{ position: "absolute", background: "#fff" }}>
                                        {itemSubNavBar[1].map((element: string, index: number) => (
                                            <MenuItem disableRipple sx={{ fontSize: ".9rem" }} key={element} onClick={() => handleNavigateButton(paramsNavigate[1][index])}>
                                                {element}
                                            </MenuItem>
                                        ))}
                                    </Collapse>
                                </Box>
                                <Button
                                    variant="text"
                                    style={buttonStyle}
                                    onClick={() => handleNavigateButton("contact")}
                                    sx={{
                                        fontSize: ".8rem", color: buttonActive === "contact" ? "#aa5913" : "#4f4f4f",
                                        transition: "all .3s",
                                        "&:hover": {
                                            color: "#aa5913",
                                        },
                                        borderBottom: buttonActive === "contact" ? 1 : 0,
                                        borderColor: "#aa5913", fontWeight: "bold"
                                    }}
                                >
                                    Contato
                                </Button>
                                <Button variant="contained" size="small" href="https://portal.worklabweb.com.br/resultados-on-line/234" target="_blank">
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
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: "25px" }}>
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
import microscopio from '../../assets/icons/microscopio.png';
import book from '../../assets/icons/e-book.png';
import location from '../../assets/icons/location.png';
import newIcon from '../../assets/icons/new.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BiotechIcon from '@mui/icons-material/Biotech';
import PlaceIcon from '@mui/icons-material/Place';
import FiberNewIcon from '@mui/icons-material/FiberNew';

import MenuBookIcon from '@mui/icons-material/MenuBook';




export const infoAboutCompany = [{ city: "Natércia - MG - Matriz", address: " Rua Pref. José Nacacio, 21 - Centro, Natércia - MG, 37524-000", call: "(35) 3456-1381", map: "https://maps.app.goo.gl/gqrJcopBqmxQySGo6", whatsapp: "3534561381" },
{ city: "Heliodora - MG", address: " Praça Santa Izabel, 139 - Centro, Heliodora - MG, 37484-000", call: "(35) 99906-2122", map: "https://maps.app.goo.gl/PVWegh4NjMn9a9zD8", whatsapp: "35999062122" },
{ city: "São Sebastião da Bela Vista - MG", address: " Rua Wilson Openheimer, 10 - centro, São Sebastião da Bela Vista - MG, 37567-000", call: "(35) 99763-7182", map: "https://maps.app.goo.gl/FpqQcMLu43jjbx9W6", whatsapp: "35997637182" },
{ city: "Conceição das Pedras - MG", address: " Rua Apulcro de Castro Teodoro, 120 - centro, Conceição das Pedras - MG, 37527-000", call: "(35) 99823-7182", map: "https://maps.app.goo.gl/c7md2L5VaJ9FXAt4A", whatsapp: "35998237182" },
{ city: "Lambari - MG", address: " Rua Venceslau Braz, 62 - Centro, Lambari - MG, 37480-000", call: "(35) 3515-0122", map: "https://maps.app.goo.gl/V1SrJoJGr6NREVhq6", whatsapp: "3535150122" },

]

export const itemNavBar = ["Home", "Sobre Nós", "Exames", "Serviços", "Contato"]

export const itemSubNavBar = [["Sobre Nós", "Certificados", "Unidades de coleta", "Notícias"], ["Atendimento domiciliar", "Coleta Empresarial"]];

export const navigateDrawer = [
    { page: "Home", iconPage: "", navigate: "" },
    { page: "Sobre nós", iconPage: "", navigate: "aboutwe" },
    { page: "Exames", iconPage: "", navigate: "exams" },
    { page: "Serviços", iconPage: "", navigate: "services" },
    { page: "Contato", iconPage: "", navigate: "contact" },
  ]
  
export const infoCardHome = [{title:"Resultado de exames", iconMain: microscopio, iconArrow:"arrow_forward"},
{title:"Nossa Historia", iconMain:book, iconArrow:"arrow_forward"},{title:"Unidades", iconMain:location, iconArrow:"arrow_forward"},{title:"Novidades", iconMain:newIcon, iconArrow:"arrow_forward"}]
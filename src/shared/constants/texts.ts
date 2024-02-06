import microscopio from '../../assets/icons/microscopio.png';
import book from '../../assets/icons/e-book.png';
import location from '../../assets/icons/location.png';
import newIcon from '../../assets/icons/new.png';


import imagetest from "../../assets/images/conactImage.png"

import iconPncq from "../../assets/icons/pncq.jpg"
import dicq from "../../assets/icons/dicq.png"



export const infoAboutCompany = [{ city: "Natércia - MG - Matriz", address: " Rua Pref. José Nacacio, 21 - Centro, Natércia - MG, 37524-000", call: "(35) 3456-1381", map: "https://maps.app.goo.gl/gqrJcopBqmxQySGo6", whatsapp: "3534561381", image: imagetest },
{ city: "Heliodora - MG", address: " Praça Santa Izabel, 139 - Centro, Heliodora - MG, 37484-000", call: "(35) 99906-2122", map: "https://maps.app.goo.gl/PVWegh4NjMn9a9zD8", whatsapp: "35999062122", image: imagetest },
{ city: "São Sebastião da Bela Vista - MG", address: " Rua Wilson Openheimer, 10 - centro, São Sebastião da Bela Vista - MG, 37567-000", call: "(35) 99763-7182", map: "https://maps.app.goo.gl/FpqQcMLu43jjbx9W6", whatsapp: "35997637182", image: imagetest },
{ city: "Conceição das Pedras - MG", address: " Rua Apulcro de Castro Teodoro, 120 - centro, Conceição das Pedras - MG, 37527-000", call: "(35) 99823-7182", map: "https://maps.app.goo.gl/c7md2L5VaJ9FXAt4A", whatsapp: "35998237182", image: imagetest },
{ city: "Lambari - MG", address: " Rua Venceslau Braz, 62 - Centro, Lambari - MG, 37480-000", call: "(35) 3515-0122", map: "https://maps.app.goo.gl/V1SrJoJGr6NREVhq6", whatsapp: "3535150122", image: imagetest },

]


export const itemNavBar = ["Home", "Sobre Nós", "Exames", "Serviços", "Contato"]

export const itemSubNavBar = [["Sobre Nós", "Unidades de coleta"], ["Atendimento domiciliar", "Coleta Empresarial"]];

export const navigateDrawer = [
  { page: "Home", iconPage: "", navigate: "" },
  { page: "Sobre nós", iconPage: "", navigate: "aboutwe" },
  { page: "Exames", iconPage: "", navigate: "exams" },
  { page: "Serviços", iconPage: "", navigate: "services" },
  { page: "Contato", iconPage: "", navigate: "contact" },
]

export const infoCardHome = [{ title: "Resultado de exames", iconMain: microscopio, iconArrow: "arrow_forward" },
{ title: "Nossa Historia", iconMain: book, iconArrow: "arrow_forward" }, { title: "Unidades", iconMain: location, iconArrow: "arrow_forward" }, { title: "Novidades", iconMain: newIcon, iconArrow: "arrow_forward" }]


export const infoCertification = [{ certification: "Programa Nacional de Controle de Qualidade", iconCertification: iconPncq, text: "O PNCQ, Programa Nacional de Controle de Qualidade, é uma empresa técnico-científica provedora de ensaios de proficiência para Laboratórios Clínicos que auxilia e oferece opções para o aprimoramento da qualidade destas empresas." }
  , { certification: "Sistema Nacional de Acreditação", iconCertification: dicq, text: "O DICQ Sistema Nacional de Acreditação é um programa da SBAC Sociedade Brasileira de Análises Clínicas que tem por objetivo a realização de inspeção, auditorias, credenciamento e acreditação do sistema da qualidade de Laboratórios Clínicos e de organizações prestadoras de serviços de saúde, através de critérios e requisitos próprios." }]
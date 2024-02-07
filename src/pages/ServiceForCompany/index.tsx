import React from "react";
import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial";
import imageAboutServicesForCompany from "../../assets/images/image_about_services_sor_company.png"
import { Box } from "@mui/material";
import imageBackground from "../../assets/images//service_for_company_image_initial.png"
import { InfoService } from "../../shared/components/infoService/InfoService";
import { ContactComponent } from "../../shared/components/contactComponent/ContactComponent";
import { ScrollRestoration } from "react-router-dom";



export const ServiceForCompany: React.FC = () => {



    return (
        <Box>
            <ScrollRestoration />
            <LayoutSectionInitial background={imageBackground} text="Atendimento Empresarial" />
            <InfoService
                title="Priorizando a Saúde de sua Equipe com a Clinic Vale"
                subTitle="Na Clinic Vale, compreendemos a importância da saúde dos colaboradores para o sucesso e o bem-estar de sua empresa. É por isso que oferecemos serviços de coleta empresarial de alta qualidade, adaptados às necessidades específicas de sua organização. Entre em contato e faça um orçamento."
                image={imageAboutServicesForCompany}
            />
            <ContactComponent showText={false} />

        </Box>
    )
}
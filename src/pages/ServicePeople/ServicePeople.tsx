import React from "react";
import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial";
import servicePeopleImageInitialSection from "../../assets/images/servicePeopleImageInitialSection.png"
import { Box } from "@mui/material";
import imageService from "../../assets/images/imageAboutServicesPeople.png"
import { InfoService } from "../../shared/components/infoService/InfoService";
import { ContactComponent } from "../../shared/components/contactComponent/ContactComponent";

export const ServicePeople: React.FC = () => {

    return (
        <Box>
            <LayoutSectionInitial background={servicePeopleImageInitialSection} text="Atendimento Domiciliar" />
            <InfoService
                title="Cuidando de Você, Onde Você Estiver!"
                subTitle=" Na Clinic Vale, sabemos que conveniência e conforto são essenciais para você. Por isso, oferecemos o serviço de atendimento domiciliar. Com a nossa equipe qualificada, levamos a expertise do nosso laboratório de análises clínicas diretamente para a sua casa, garantindo comodidade e precisão nos resultados dos seus exames. Priorizamos sua saúde e bem-estar, proporcionando um serviço personalizado e de qualidade, onde quer que você esteja."
                image={imageService}
            />
            <ContactComponent showText={false}/>

        </Box>


    )
}
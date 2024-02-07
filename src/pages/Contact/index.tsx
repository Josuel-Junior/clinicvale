import slide_carousel2 from "../../assets/images/contactImageInitialSection.png"
import { Box } from "@mui/material"
import { LayoutSectionInitial } from '../../shared/components/layout/layoutInitialSection/LayoutSectionInitial';
import { ScrollRestoration } from 'react-router-dom';
import { ContactComponent } from '../../shared/components/contactComponent/ContactComponent';

export const Contact: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <ScrollRestoration />

            <LayoutSectionInitial background={slide_carousel2} text="Entre em contato" subText='Nossa equipe de profissionais está pronta para atendê-lo.' />

            <ContactComponent showText={true} />

            <Box sx={{ width: "100vw", height: "70vh" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2657550811297!2d-45.51348686452581!3d-22.11959790065862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb0f25ebe2aaab%3A0x6f653f05899f6004!2sLaborat%C3%B3rio%20Clinic%20Vale%20%7C%20Matriz!5e0!3m2!1spt-BR!2sbr!4v1707140308302!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                ></iframe>
            </Box>

        </Box>

    )
}
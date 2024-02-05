import React from "react";
import { DisplayDetailsCard } from "../../shared/components/displayInfoCard/DisplayDetailsCard";
import { infoAboutCompany } from "../../shared/constants/texts";
import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial";
import { ScrollRestoration } from "react-router-dom";
import { Box } from "@mui/material";
import unitsInitialSectionImage from "../../assets/images/unitsInitialSectionImage.png"

export const Units: React.FC = () => {
    return (
        <Box>
            <ScrollRestoration />
            <LayoutSectionInitial background={unitsInitialSectionImage} text="Conheça Nossas unidades de coletas" />
            <DisplayDetailsCard details={infoAboutCompany} />
        </Box>
    )
}
import React from "react";
import { DisplayDetailsCard } from "../../shared/components/displayInfoCard/DisplayDetailsCard";
import { infoAboutCompany } from "../../shared/constants/texts";
import { LayoutSectionInitial } from "../../shared/components/layout/layoutInitialSection/LayoutSectionInitial";
import { ScrollRestoration } from "react-router-dom";
import { Box } from "@mui/material";
import unitsInitialSectionImage from "../../assets/images/unitsInitialSectionImage.webp"

export const Units: React.FC = () => {
    return (
        <Box sx={{ width: "100vw" }}>
            <ScrollRestoration />
            <LayoutSectionInitial background={unitsInitialSectionImage} text="Conheça Nossas unidades de coletas" />
            <DisplayDetailsCard details={infoAboutCompany} />
        </Box>
    )
}
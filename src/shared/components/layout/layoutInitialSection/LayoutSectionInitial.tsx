
import { Parallax } from "react-parallax"
import { Box, Container, Typography } from "@mui/material";


interface ILayoutSectionInitial {
    background: any;
    text: string;
}


export const LayoutSectionInitial: React.FC<ILayoutSectionInitial> = ({ background, text }) => {

    return (

        <Parallax blur={0} bgImage={background} bgImageAlt="the cat" strength={200}>
            <Box sx={{ width: "100vw", height: "70vh" }}>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: '100%' }}>
                    <Typography component="h2" sx={{
                        fontWeight: "bold",
                        textAlign: 'center',
                        fontSize: {
                            xs: "1rem",
                            sm: "1.5rem",
                            md: "1.7rem",

                        }, color: "#fff"
                    }}>
                        Entre em Contato
                    </Typography>
                    <Typography paragraph sx={{
                        fontSize: {
                            xs: ".9rem",
                            sm: ".9rem",
                            md: "1.1rem",

                        }, mt: "5px", color: "#fff"
                    }}>
                        Nossa equipe de profissionais está pronta para atendê-lo.
                    </Typography>
                </Container>
            </Box>
        </Parallax >

    )
}
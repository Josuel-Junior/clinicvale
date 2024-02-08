
import { Parallax } from "react-parallax"
import { Box, Container, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";


interface ILayoutSectionInitial {
    background: any;
    text: string;
    subText?: string;
}


export const LayoutSectionInitial: React.FC<ILayoutSectionInitial> = ({ background, text, subText }) => {

    return (

        <Parallax blur={0} bgImage={background} bgImageAlt="the cat" strength={200}>
            <Box sx={{ width: "100vw", height: "70vh" }}>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: '100%' }}>
                    <Slide direction='up' >

                        <Typography component="h2" sx={{
                            fontWeight: "bold",
                            textAlign: 'center',
                            fontSize: {
                                xs: "1.3rem",
                                sm: "1.5rem",
                                md: "1.7rem",

                            }, color: "#fff"
                        }}>
                            {text}
                        </Typography>
                        <Typography paragraph sx={{
                            fontSize: {
                                xs: ".9rem",
                                sm: ".9rem",
                                md: "1.1rem",

                            }, mt: "5px", color: "#fff"
                        }}>
                            {subText}

                        </Typography>
                    </Slide>
                </Container>
            </Box>
        </Parallax >

    )
}
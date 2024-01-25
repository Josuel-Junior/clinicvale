import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#f3801c",
            dark: "#aa5913",
            light: "#f59949",
            contrastText: "#ffffff",
            
        },
        secondary: {
            main: "#fff",
            dark: "#d8803c",
            light: "#df9963",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f7f6f3",
            paper: "#ffffff",
        },
        

    },
    typography: {
        subtitle1: {
            color: "#aa5913",
            fontSize: 19,
        },
        body1: {
            fontSize: 19,
            color: "#4f4f4f"
        },
        h1: {
            color: "#aa5913"
        },
        h2: {
            color: "#aa5913"
        },
        h3: {
            color: "#aa5913"
        },
        h5: {
            color: "#4f4f4f"
        }

    }
});

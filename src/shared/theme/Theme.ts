import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#FB8423",
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
            color: "#FB8423"
        },
        h2: {
            color: "#FB8423"
        },
        h3: {
            color: "#FB8423"
        },
        h5: {
            color: "#FB8423"
        }

    }
});

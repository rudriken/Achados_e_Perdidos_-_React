import { createTheme } from "@mui/material";

const tema = createTheme({
    palette: {
        primary: {
            light: "#9661FF",
            main: "#6c45f4",
            dark: "#581ECD",
        },
        secondary: {
            light: "#2BFFF2",
            main: "#02E7D9",
            dark: "#1DD6CB",
        },
        text: {
            primary: "#abb6c3",
            secondary: "#e5e5e5",
        },
        error: {
            main: "#FC3C00",
        },
        warning: {
            main: "#FCA600",
        },
        success: {
            main: "#00D34D",
        },
        grey: {
            50: "#FAFAFA",
            100: "#F0F0F0",
            200: "#D7D9DD",
            300: "#C4C4C4",
            400: "#9B9B9B",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: "Poppins, Roboto, sans-serif",
    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default tema;

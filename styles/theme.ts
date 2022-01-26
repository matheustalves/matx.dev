import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7AA2F7",
        },
        secondary: {
            main: "#BB9AF7",
        },
        error: {
            main: "#F7768E",
        },
        warning: {
            main: "#FF9E64",
        },
        info: {
            main: "#73DACA",
        },
        success: {
            main: "#9ECE6A",
        },
        background: {
            default: "#1A1B26",
            paper: "#24283B",
        },
        text: {
            primary: "#e2e7f5",
        },
    },
});

export default theme;

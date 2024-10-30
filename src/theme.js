import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

export default theme;

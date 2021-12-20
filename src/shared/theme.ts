import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6300",
    },
    secondary: {
      main: "#009dff",
    },
    background: {
      default: "#121212",
      paper: "#1F1B24",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          text-decoration: none;
        }
        p {
          margin-block-start: 0;
        }
      `,
    },
  },
});

export default theme;

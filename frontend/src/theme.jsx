import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f46e5" // Indigo
    },
    background: {
      default: "#f8fafc"
    }
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  }
});

export default theme;


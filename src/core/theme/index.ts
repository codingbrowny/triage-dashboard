import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
  },
  palette: {
    primary: {
      light: "#757ce8",
      //   main: "#3f50b5",
      main: "#FF6363",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

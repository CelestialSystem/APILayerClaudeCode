import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import AppRouter from "./app/AppRouter";
import "./css/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";

/**
 * Root component responsible for global providers
 * and application routing initialization.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StylesThemeProvider>
    </ThemeProvider>
  );
}

export default App;

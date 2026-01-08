import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import AppRouter from "./app/AppRouter";
import "./css/global.css";

/**
 * Root component responsible for global providers
 * and application routing initialization.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { appTheme } from "./themes/theme";

import Layout from "./components/layout";
import SeperatePages from "./pages_welcome/seperatePages";
import WelcomePage from "./pages_welcome/welcomePage";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
          <CssBaseline />         
          <SeperatePages seperate={1}/> 
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { appTheme } from "./themes/theme";

import Layout from "./components/layout";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

 

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={appTheme}>
       <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Layout>
            <Outlet />
          </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import theme from "./theme/theme";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Routes}/>
    </ThemeProvider>
  );
}

export default App;
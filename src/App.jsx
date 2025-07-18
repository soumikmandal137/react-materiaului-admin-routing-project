// import { useState } from 'react'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import theme from "./theme/Theme";
// import './App.css'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;

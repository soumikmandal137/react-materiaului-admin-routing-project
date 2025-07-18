import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Container maxWidth="xxl" sx={{padding: 0}}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItem: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Sidebar />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;

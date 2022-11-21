import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

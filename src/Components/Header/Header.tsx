import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { InfoBar } from "./InfoBar/InfoBar";
import { Box, Grid } from "@mui/material";
import { BurgerBox } from "./BurgerBox/BurgerBox";
import { NavBox } from "./NavBox/NavBox";
import { LogoBox } from "./LogoBox/LogoBox";
import { ProfileBox } from "./ProfileBox/ProfileBox";

export const Header: React.FC = () => {
  return (
    <>
      <InfoBar />
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(0deg, #000000 00%, #000000 100%)",
          height: "106px",
        }}
      >
        <Toolbar>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={4} md={5} sx={{ order: { xs: "2", ms: "1" } }}>
              <NavBox />
              <BurgerBox />
            </Grid>
            <Grid item xs={8} md={3} sx={{ order: { xs: "1", md: "2" } }}>
              <LogoBox />
            </Grid>
            <Grid item md={4} sx={{ 
              order: "3",
              display: "flex",
              justifyContent: "end",
              }}>
              <ProfileBox />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

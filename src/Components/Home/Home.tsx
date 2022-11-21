import { Container, Grid } from "@mui/material";
import React from "react";
import { FunkyCollection } from "./FunkyCollection/FunkyCollection";
import { FunkyPointsItem } from "./FunkyPointsItem/FunkyPointsItem";

export const Home: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        background: "linear-gradient(0deg, #000000 00%, #000000 100%)",
      }}
    >
      <Grid item xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
        <img src="src/assets/Frame425.png" width="100%" height="300" />
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          paddingTop: "40px",
          background: "linear-gradient(0deg, #000000 00%, #000000 100%)",
        }}
      >

        <FunkyPointsItem />

        <Grid item xs={12} md={6} sx={{paddingLeft: {xs: "0px", md: "50px"}}} >
          <FunkyCollection />
        </Grid>
      </Grid>
    </Container>
  );
};

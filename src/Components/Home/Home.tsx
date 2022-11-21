import { Box, Container, Grid } from "@mui/material";
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
      <Grid
        container
        sx={{
          paddingTop: "40px",
          background: "linear-gradient(0deg, #000000 00%, #000000 100%)",
        }}
      >
        <FunkyPointsItem />
        <Grid item xs={12}>
          <FunkyCollection />
        </Grid>
      </Grid>
    </Container>
  );
};

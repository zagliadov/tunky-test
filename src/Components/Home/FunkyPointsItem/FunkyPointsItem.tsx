import { Grid } from "@mui/material";
import React from "react";
import { FunkyPoints } from "../../Icons/Icons";

export const FunkyPointsItem: React.FC = () => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        display: "flex",
        justifyContent: {xs: "center", md: "start"},
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <FunkyPoints />
    </Grid>
  );
};

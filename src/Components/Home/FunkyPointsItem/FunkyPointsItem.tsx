import { Grid } from "@mui/material";
import React from "react";
import { FunkyPoints } from "../../Icons/Icons";

export const FunkyPointsItem: React.FC = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <FunkyPoints />
    </Grid>
  );
};

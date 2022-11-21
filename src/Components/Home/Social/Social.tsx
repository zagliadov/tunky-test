import { Box, Grid } from "@mui/material";
import React from "react";
import { Pinterest, Planet, Twitter } from "../../Icons/Icons";

export const Social: React.FC = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        paddingTop: "20px",
        color: "#FFFFFF",
      }}
    >
      <Grid item xs={12}>
        <Box component="span">
          <Twitter />
        </Box>
        <Box component="span"
          sx={{
            paddingLeft: "25px",
          }}
        >
          <Pinterest />
        </Box>
        <Box component="span"
          sx={{
            paddingLeft: "25px",
          }}
        >
          <Planet />
        </Box>
        <Box component="span"
          sx={{
            paddingLeft: "25px",
          }}
        >
          <Planet />
        </Box>
      </Grid>
    </Grid>
  );
};

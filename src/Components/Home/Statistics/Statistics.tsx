import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Fifty,
  FiftyF,
  OneHundred,
  OneHundredF,
  OneHundredFViolet,
  OneHundredViolet,
} from "../../Icons/Icons";

export const Statistics: React.FC = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        paddingTop: "20px",
      }}
    >
      <Grid item xs={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <OneHundred />
          <Box
            sx={{
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <OneHundredF />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "107%",
              color: "#FFFFFF",
            }}
          >
            BUYING TX
          </Typography>
        </Grid>
      </Grid>
      {/* 50 */}
      <Grid item xs={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Fifty />
          <Box
            sx={{
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <FiftyF />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "107%",
              color: "#FFFFFF",
            }}
          >
            HOLDING/DAY
          </Typography>
        </Grid>
      </Grid>

      {/* 100/2 */}
      <Grid item xs={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <OneHundredViolet />
          <Box
            sx={{
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <OneHundredFViolet />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "107%",
              color: "#FFFFFF",
            }}
          >
            SELLING TX
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

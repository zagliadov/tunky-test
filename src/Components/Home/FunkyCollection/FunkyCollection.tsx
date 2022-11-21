import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  Check,
  Eye,
} from "../../Icons/Icons";
import { Statistics } from "../Statistics/Statistics";
import { Social } from "../Social/Social";

export const FunkyCollection: React.FC = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        paddingTop: "30px",
      }}
    >
      {/* Left */}
      <Grid container xs={6}>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Check />
          <Typography
            textAlign="center"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "700",
              paddingLeft: "10px",
              fontSize: "13px",
              lineHeight: "107%",
              textTransform: "uppercase",
            }}
          >
            Funky verified
          </Typography>
        </Grid>
      </Grid>
      {/* Right */}
      <Grid container xs={6}>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Eye />
          <Typography
            textAlign="center"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "107%",
              paddingLeft: "10px",
              textTransform: "uppercase",
            }}
          >
            180 view
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            display: "flex",
            paddingTop: "10px",
            paddingBottom: "5px",
            fontFamily: "Space Grotesk",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "107%",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Funky Collection
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontFamily: "Space Grotesk",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "13px",
            lineHeight: "107%",
            color: "#FFFFFF",
            paddingTop: "15px",
          }}
        >
          Funk’s very own Digitable Collectible, Mojo Vials help you multiply
          your points passively from holding NFT’s from partner projects all the
          way to completing quests & giveaways with partners
        </Typography>
      </Grid>
        
        <Statistics />
        <Social />
    </Grid>
  );
};

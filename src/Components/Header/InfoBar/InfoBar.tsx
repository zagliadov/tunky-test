import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { CustomLink } from "../../CustomLink/CustomLink";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles({
  info: {
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(0deg, #121212 00%, #121212 100%)",
    color: "#FFFFFF",
    height: "42px",
  },
  containerContent: {
    display: "flex",
    paddingLeft: "43px",
    paddingRight: "45px",
  },
  aboutUs: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export const InfoBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      sx={{ display: { xs: "none", md: "flex" } }}
      classes={{
        root: classes.info,
      }}
    >
      <Grid
        container
        spacing={2}
        classes={{
          root: classes.containerContent,
        }}
      >
        <Grid item xs={9}>
          <CustomLink to="partner-view">
            &lt; &ndash; SWITCH TO PARTNER VIEW
          </CustomLink>
        </Grid>
        <Grid
          item
          xs={3}
          classes={{
            root: classes.icons,
          }}
        >
          <CustomLink to="about-us">ABOUT US</CustomLink>
          <CustomLink to="#">
            <TwitterIcon />
          </CustomLink>
          <CustomLink to="#">
            <TwitterIcon />
          </CustomLink>
          <CustomLink to="#">
            <TwitterIcon />
          </CustomLink>
          <CustomLink to="#">
            <TwitterIcon />
          </CustomLink>
        </Grid>
      </Grid>
    </AppBar>
  );
};

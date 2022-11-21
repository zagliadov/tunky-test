import { Typography } from "@mui/material";
import React from "react";
import { Logo } from "../../Icons/Icons";

export const LogoBox: React.FC = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: "flex", md: "flex" },
        justifyContent: { xs: "end", md: "center" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        flexGrow: 1,
        textDecoration: "none",
      }}
    >
      <Logo />
    </Typography>
  );
};

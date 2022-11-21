import { Box, Button } from "@mui/material";
import React from "react";

const pages = ["Submit a collection", "Partners", "Rewards"];

export const NavBox: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            textTransform: "uppercase",
            fontFamily: "Space Mono",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "140%",
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

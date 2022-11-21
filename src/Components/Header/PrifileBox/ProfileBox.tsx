import { Box } from "@mui/material";
import React from "react";

export const ProfileBox: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Box>
  );
};

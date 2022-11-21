import { Avatar, Box, Button } from "@mui/material";
import React from "react";

export const ProfileBox: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
      }}
    >
      <Box component="div">
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Box component="div" sx={{
        paddingLeft: "25px",
      }}>
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Box component="div" sx={{
        paddingLeft: "25px",
      }}>
        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
      </Box>
    </Box>
  );
};

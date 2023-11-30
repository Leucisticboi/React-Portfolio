import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center' }}>
        Welcome to my portfolio page!
      </Typography>
    </Box>
  );
}
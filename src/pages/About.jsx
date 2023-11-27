import * as React from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
    <Typography variant="h2" component="h2" sx={{ my: 2, textAlign: 'center' }}>
      About Me
    </Typography>
    <Typography variant="body1" gutterBottom>
      I am a Full Stack Web Developer with a background in tech assembly and sales. <br /> I have a passion for learning and problem solving. I am a creative thinker who is always looking for a new challenge. I am a team player who enjoys collaborating with others to create something great. <br /> <br />
      My hobbies include: <br />
      - Camping in the Tetons <br />
      - Hiking with my dogs Alice and Spike <br />
      - Reading about history <br />
      - Learning new tech concepts <br />
    </Typography>
    </Box>
  )
}
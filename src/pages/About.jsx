import * as React from "react";
import Typography from '@mui/material/Typography';
import { Container, Box } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      paddingTop: '90px', 
      paddingBottom: '90px' 
      }}
    >
      <div className="image-container">
        <img className="portrait" src="/portrait.jpeg" alt="Portrait" />
      </div>
        <Box sx={{ 
          textAlign: 'center', 
          overflowWrap: 'break-word' 
        }}>
          <Typography 
            variant="h2" 
            sx={{ my: 2 }}
          >
            About Me
          </Typography>
          <Typography variant="body1">
            My name is Robert Henderson, aka Milo. <br />
            I am a Full Stack Web Developer <br />with a background in tech assembly and sales. <br /> I have a passion for learning and problem solving. <br />I am a creative thinker who is always looking for a <br />new challenge. I am a team player who enjoys<br /> collaborating with others to create something great. <br /> <br />
            My hobbies include: <br />
            - Camping in the Tetons <br />
            - Hiking with my dogs Alice and Spike <br />
            - Reading about history <br />
            - Learning new tech concepts <br />
            <br /> <br /> 
          </Typography>
        </Box>
    </Container>
  );
}
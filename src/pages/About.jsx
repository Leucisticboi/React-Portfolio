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
          overflowWrap: 'break-word',
          maxWidth: { xs: '100%', md: '50%' }
        }}>
          <Typography 
            variant="h2" 
            sx={{ my: 2 }}
          >
            Hi there!
          </Typography>
          <Typography variant="body1">
            My name is Robert Henderson, aka Milo. <br />
            I am a Full Stack Web Developer with a background in tech assembly and sales. I have a passion for learning and problem solving. I am a creative thinker who is always looking for a new challenge. I am a team player who enjoys collaborating with others to create something great. <br />
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
import React from 'react';
import Typography from '@mui/material/Typography';

export default function MultiActionAreaCard() {
  return (
    <div className="container">
      <div className="image-container">
        <img className="portrait" src="/portrait.jpeg" alt="Portrait" />
      </div>
      <div>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center' }}>
          Hello there!
          <br />
          My name is Robert.
          <br /> 
          I'm a full stack web developer. 
          <br />
          Welcome to my portfolio!
        </Typography>
      </div>
    </div>
  );
}
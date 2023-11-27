import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kp0g4wp',
        'template_lqqd1ge',
        form.current,
        'ASgOsNRoIuRThJzIT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <Box
      component="form"
      ref={form}
      onSubmit={(e) => {
        sendEmail(e);
        e.target.reset();
      }}
      autoComplete="off"
      sx={{
        padding: "10%",
        width: '100%',
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" component="h2" sx={{ my: 2, textAlign: 'center' }}>
        Contact Me
      </Typography>
      <TextField id="outlined-basic" name="user_name" label="Name" variant="outlined" sx={{ my: 2 }} required />
      <TextField id="outlined-basic" name="user_email" label="Email" variant="outlined" sx={{ my: 2 }} required />
      <TextField id="outlined-basic" name="message" label="Message" variant="outlined" sx={{ my: 2, height: '10%' }} multiline required />
      <Button type="submit" value="send" variant="contained" sx={{ my: 2, width: '20%', margin: 'auto' }}>
        Submit
      </Button>
    </Box>
  )
}
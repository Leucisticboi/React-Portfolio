import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Button 
    component={Link} 
    variant="outlined" 
    to="/">
      Home
    </Button>
  )
}
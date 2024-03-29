import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { IoLogoReact } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const pages = ['About Me', 'Projects', 'Resume', 'Contact'];

function NavBar() {
  const currentPage = useLocation().pathname;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{
      maxHeight: '80px',
      alignSelf: 'center',
      borderRadius: '15px',
      width: { xs: '98%', sm:'98%', md: '98%' },
      top: '10px'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-evenly' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'none', md: 'flex', flexDirection: 'row', alignItems: 'center' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#fefae0',
              textDecoration: 'none',
            }}
          >
            <IoLogoReact />
            LeucisticBoi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'space-between' } }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', alignItems: 'center' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#fefae0',
              textDecoration: 'none',
            }}
          >
            <IoLogoReact />
            LeucisticBoi
          </Typography>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}
                sx={{
                  color: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#bc6c25' : 'inherit',
                  display: 'block',
                  textDecoration: 'none',
                  background: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#dda15e' : 'transparent',
                }}
                >
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={`/${page.toLowerCase().split(' ')[0]}`}
                    sx={{
                      color: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#fefae0' : 'inherit',
                      display: 'block',
                      textDecoration: 'none',
                      background: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#dda15e' : 'transparent',
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().split(' ')[0]}`}
                sx={{
                  color: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#bc6c25' : '#fefae0',
                  display: 'block',
                  textDecoration: 'none',
                  background: currentPage === `/${page.toLowerCase().split(' ')[0]}` ? '#fefae0' : 'transparent',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default NavBar;
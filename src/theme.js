import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    text: {
      main: '#606c38',
      second: '#283618',
      third: '#fefae0'
    },
    primary: {
      main: '#283618'
    },
    background: {
      default: '#fefae0'
    },
    secondary: {
      main: '#dda15e',
      darker: '#bc6c25'
    },
    error: {
      main: '#bc6c25'
    },
    typography: {
      fontFamily: 'Roboto',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: '4rem',
        fontWeight: 700,
        color: '#606c38'
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 700,
        color: '#606c38'
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#606c38'
      },
    }
  }
});

theme = createTheme(theme, {
  components: {
    MuiCSSBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.main,
          margin: 0,
          padding: 0
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          left: 'auto',
          right: 'auto',
          backgroundColor: theme.palette.secondary.darker
        }
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.text.third,
            backgroundColor: theme.palette.secondary.main
          }
        },
        contained: {
          color: theme.palette.text.third,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main
          }
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        fontFamily: 'Roboto',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
          fontSize: '4rem',
          fontWeight: 700,
          color: '#606c38'
        },
        h2: {
          fontSize: '3rem',
          fontWeight: 700,
          color: '#606c38'
        },
        h3: {
          fontSize: '2rem',
          fontWeight: 700,
          color: '#606c38'
        },
        body1: {
          fontSize: '1.5rem',
          fontWeight: 400,
          color: '#606c38',
          textAlign: 'center'
        },
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.darker,
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            color: theme.palette.text.third,
            backgroundColor: theme.palette.text.secondary
          }
        },
      }
    },
  }
});

export default theme;
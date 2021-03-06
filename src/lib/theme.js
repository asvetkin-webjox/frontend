/* eslint-disable max-len */
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1024,
      xl: 1441,
    },
  },
  spacing: 8,
  shadow: {
    primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
  },
  // COLORS
  palette: {
    primary: {
      main: '#0A0D1C',
      hover: '#121426',
      dim: '#17192D',
      header: '#0F1122',
    },
    secondary: {
      main: '#FFFFFF',
      gray: '#D2D8D8',
    },
    accent: '#FF3854',
    green: '#1EC78E',
    greenLight: '#0AEA83',
    blue: '#286AF0',
    blueLight: '#717FB0',
    border: '#2D80FF',
    buttonHover: '#1061DC',
  },
  // FONTS
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 300,
    htmlFontSize: 10,
    color: '#fff',
    h1: {
      fontSize: '4.8rem',
      lineHeight: '3.4rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '3.2rem',
      lineHeight: '4rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    subtitle: {
      fontSize: '0.8rem',
    },
  },
  // CUSTOM GLOBAL STYLES
  overrides: {
    MuiButton: {
      root: {
        maxHeight: '100%',
        height: '40px',
        borderRadius: '4px',
        border: '1px solid #2D80FF',
        '&:$hover': {},
        '&$disabled': {},
      },
      text: {
        padding: '10px 40px',
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 300,
        textTransform: 'none',
        lineHeight: '1',
        '&:hover': {
          transition: '0.3s',
          backgroundColor: '#2D80FF',
        },
        '&$disabled': {},
      },
    },
  },
});
export default theme;

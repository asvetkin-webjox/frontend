import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles(
  ({ breakpoints, palette: { blue, buttonHover, secondary, blueLight, border } }) => ({
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: '0.3s',
    },
    blueButton: {
      fontWeight: 'bold',
      backgroundColor: blue,
      border: `1px solid transparent`,
      '&:hover': {
        backgroundColor: buttonHover,
        border: `1px solid ${buttonHover}`,
      },
    },
    blackButton: {
      border: `1px solid ${buttonHover}`,
      '&:hover': {
        backgroundColor: blue,
        border: `1px solid ${buttonHover}`,
      },
    },
    smallButton: {
      width: '100px',
      height: '30px',
    },
    loginButton: {
      width: '60px',
    },
    bigButton: {
      height: '56px',
      fontSize: '20px',
      fontWeight: 'normal',
    },
    customWidth: {
      width: ({ width }) => width,
    },
    link: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: border,
    },
  }),
);

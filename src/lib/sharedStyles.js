import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles(({ breakpoints, palette: { blue, primary, border } }) => ({
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
      backgroundColor: 'transparent',
      border: `1px solid ${border}`,
    },
  },
  blackButton: {
    border: `1px solid ${border}`,
    '&:hover': {
      backgroundColor: blue,
      border: `1px solid transparent`,
    },
  },
  smallButton: {
    width: '100px',
    height: '30px',
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
}));

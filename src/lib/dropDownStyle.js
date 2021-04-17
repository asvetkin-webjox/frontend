import { makeStyles } from '@material-ui/core/styles';

export const dropDownStyle = makeStyles(({ palette: { primary, blueLight }, shadow }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: '10px 15px 10px 42px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: `1px solid ${blueLight}`,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '18px',
      height: '12px',
      width: '12px',
      background: 'url(icons/company.svg) no-repeat',
    },
  },
  content: {
    position: 'absolute',
    left: '0',
    top: '45px',
    width: '100%',
    padding: '9px 8px',
    overflow: 'scroll',
    borderRadius: '4px',
    zIndex: '10',
    background: primary.dim,
    boxShadow: shadow.primary,
  },
}));

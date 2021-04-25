import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette: { blueLight, secondary, primary } }) => ({
  linkStyle: {
    color: blueLight,
    opacity: 0.6,
    backgroundColor: primary.dim,
    [breakpoints.up('xl')]: {
      backgroundColor: primary.main,
    },
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 42,
    height: 40,
    width: '100%',
    '&:hover': {
      opacity: 1,
      color: secondary.main,
      textDecoration: 'none',
      fontWeight: 700,
      backgroundColor: primary.main,

      [breakpoints.up('xl')]: {
        backgroundImage: `linear-gradient(to right, 
          transparent 0 10%, rgba(113,127,176, .3), transparent 90%)`,
      },
    },
  },
}));

const SideMenuLink = ({ href, icon, text }) => {
  const { linkStyle } = useStyles();
  return (
    <Link href={href} className={linkStyle}>
      {icon}
      {text}
    </Link>
  );
};

export { SideMenuLink };

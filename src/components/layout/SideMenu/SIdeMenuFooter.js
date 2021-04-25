import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { secondary } }) => ({
  footerStyle: {
    height: 40,
    fontSize: '1.2rem',
    position: 'absolute',
    bottom: 0,
    color: secondary.main,
    paddingLeft: 42,
  },
  footerLinkStyle: {
    color: secondary.main,
    marginRight: 16,
  },
}));

const SideMenuFooter = () => {
  const { footerStyle, footerLinkStyle } = useStyles();
  return (
    <div className={footerStyle}>
      <Typography style={{ fontSize: 12 }}>Superiority LLC © 2021</Typography>

      <div>
        <Link className={footerLinkStyle} href="#">
          О платформе
        </Link>
        <Link className={footerLinkStyle} href="#">
          Политики
        </Link>
      </div>
    </div>
  );
};

export { SideMenuFooter };

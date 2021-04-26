import React, { useContext, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { SideMenuContext } from 'state/context/sideMenu-context';
import { CloseIcon } from 'components/UI/Icons/CloseIcon';

import { ACCOUNT_MENU } from './menu.config';
import { SideMenuFooter } from './SIdeMenuFooter';
import { SideMenuList } from './SideMenuList';

const useStyles = makeStyles(({ breakpoints, palette: { primary, secondary } }) => ({
  root: {
    fontSize: '1.2rem',
  },
  drawerPaper: {
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.up('sm')]: {
      width: 234,
    },
    backgroundColor: primary.dim,
  },

  headerStyle: {
    display: 'flex',
    height: 64,
    alignItems: 'center',
    color: secondary.main,
    fontSize: '2rem',
    fontWeight: 700,
    position: 'relative',
    paddingLeft: 24,
    borderBottom: `1px solid ${primary.main}`,
  },
  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  // eslint-disable-next-line prettier/prettier
}));

export const SideMenu = () => {
  const { drawerPaper, headerStyle, root, closeButtonStyle } = useStyles();

  const {
    sideMenuState: { isSideMenuOpen },
    handleSideMenuClose,
  } = useContext(SideMenuContext);

  useEffect(() => {
    handleSideMenuClose();
  }, []);

  const handleDrawerClose = () => {
    handleSideMenuClose();
  };

  const { title, content } = ACCOUNT_MENU;

  return (
    <React.Fragment>
      <Drawer
        open={isSideMenuOpen}
        onClose={handleDrawerClose}
        classes={{
          paper: drawerPaper,
          root,
        }}
      >
        <Typography className={headerStyle}>
          {title}
          <IconButton onClick={handleDrawerClose} className={closeButtonStyle}>
            <CloseIcon />
          </IconButton>
        </Typography>
        <SideMenuList list={content} />
        <SideMenuFooter />
      </Drawer>
    </React.Fragment>
  );
};

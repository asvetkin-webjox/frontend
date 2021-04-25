import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { CloseIcon } from 'components/UI/Icons/CloseIcon';
import { MenuIcon } from 'components/UI/Icons/MenuIcon';
import { ACCOUNT_MENU } from './menu.config';
import { SideMenuFooter } from './SIdeMenuFooter';
import { SideMenuList } from './SideMenuList';

const useStyles = makeStyles(({ breakpoints, palette: { blueLight, primary, secondary } }) => ({
  root: {
    fontSize: '1.2rem',
  },
  iconStyle: {
    color: blueLight,
    fontSize: '2.4rem',
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
  menuButton: {
    position: 'fixed',
    top: 10,
    left: 10,
  },

  headerStyle: {
    display: 'flex',
    height: 64,
    alignItems: 'center',
    color: secondary.main,
    fontSize: '1.2rem',
    fontWeight: 700,
    position: 'relative',
    paddingLeft: 18,
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
  const [open, setOpen] = useState(false);
  const { iconStyle, drawerPaper, menuButton, headerStyle, root, closeButtonStyle } = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { title, content } = ACCOUNT_MENU;

  return (
    <React.Fragment>
      <IconButton className={menuButton} onClick={handleDrawerOpen}>
        <MenuIcon className={iconStyle} />
      </IconButton>
      <Drawer
        open={open}
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

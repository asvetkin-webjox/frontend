import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { List, Link, ListItem, Typography } from '@material-ui/core';

import { useMedia } from 'hooks/useMedia';
import { CollapsebleListItem } from './CollapsableListItem';
import { ACCOUNT_MENU } from './menu.config';

const useStyles = makeStyles(
  ({ breakpoints, palette: { blueLight, primary, secondary } }) => ({
    root: {
      fontSize: '1.37rem',
    },
    icon: {
      color: blueLight,
      fontSize: '2.4rem',
    },
    drawerPaper: {
      [breakpoints.down('sm')]: {
        width: '100%',
      },
      [breakpoints.up('sm')]: {
        width: 230,
      },
      paddingTop: 20,
      backgroundColor: primary.dim,
    },
    menuButton: {
      position: 'fixed',
      top: 10,
      left: 10,
    },
    footer: {
      position: 'absolute',
      bottom: 18,
      color: secondary.main,
      padding: '0 18px',
    },
    footerLink: {
      color: secondary.main,
      fontSize: '1.37rem',
      marginRight: 10,
    },
    footerLinkContainer: {
      marginTop: 10,
    },
    header: {
      color: secondary.main,
      fontWeight: 700,
      position: 'relative',
      padding: '0 16px',
    },
    link: {
      color: blueLight,
      fontSize: '1.37rem',
      '&:hover': {
        color: secondary.main,
        textDecoration: 'none',
      },
    },
    closeButtonStyle: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    listItem: {
      position: 'relative',
      paddingLeft: 24,
      '&:hover': {
        backgroundColor: primary.main,
      },
    },
    // eslint-disable-next-line prettier/prettier
  })
);

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const {
    icon,
    drawerPaper,
    menuButton,
    footer,
    header,
    link,
    root,
    closeButtonStyle,
    footerLink,
    footerLinkContainer,
    listItem,
  } = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { matchesHD } = useMedia();

  const { title, content } = ACCOUNT_MENU;

  const variantDrawer = matchesHD ? 'permanent' : 'temporary';

  const openButton = matchesHD ? null : (
    <IconButton className={menuButton} onClick={handleDrawerOpen}>
      <MenuIcon className={icon} />
    </IconButton>
  );

  const closeButton = matchesHD ? null : (
    <IconButton onClick={handleDrawerClose} className={closeButtonStyle}>
      <CloseIcon className={icon} />
    </IconButton>
  );

  const createMenu = (menuArray) => {
    return menuArray.map((item) => {
      if (Object.keys(item).includes('items')) {
        return <CollapsebleListItem key={item.id} {...item} />;
      }
      return (
        <ListItem key={item.id} className={listItem}>
          {item.icon}
          <Link href={item.href} className={link}>
            {item.title}
          </Link>
        </ListItem>
      );
    });
  };

  return (
    <React.Fragment>
      {openButton}
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        variant={variantDrawer}
        classes={{
          paper: drawerPaper,
          root,
        }}
      >
        <Typography className={header}>
          {title}
          {closeButton}
        </Typography>
        <List>{createMenu(content)}</List>

        <div className={footer}>
          <Typography>Superiority LLC © 2021</Typography>

          <div className={footerLinkContainer}>
            <Link className={footerLink} href="#">
              О платформе
            </Link>
            <Link className={footerLink} href="#">
              Политики
            </Link>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

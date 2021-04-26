/* eslint-disable no-shadow */
// eslint-disable-next-line prettier/prettier
import { Collapse, ListItem, List } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment, useState } from 'react';
import { SideMenuLink } from './SideMenuLink';

const useStyles = makeStyles(({ breakpoints, palette: { primary, blueLight, secondary } }) => ({
  listItem: {
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: primary.main,
    },
  },
  iconStyle: {
    color: blueLight,
    fontSize: '2rem',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  headerStyle: {
    color: blueLight,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 42,
    height: 40,
    width: '100%',
    backgroundColor: primary.dim,
    [breakpoints.up('xl')]: {
      backgroundColor: primary.main,
    },
    '&:hover': {
      color: secondary.main,
      textDecoration: 'none',
      backgroundColor: primary.main,
      [breakpoints.up('xl')]: {
        backgroundImage: `linear-gradient(to right, 
          transparent 0 10%, rgba(113,127,176, .3), transparent 90%)`,
      },
    },
    '& h3': {
      fontWeight: 400,
      fontSize: '1.2rem',
    },
    '&:hover h3': {
      color: secondary.main,
      fontWeight: 700,
    },
  },
}));

export const CollapsebleListItem = ({ header, icon, items }) => {
  const [open, setOpen] = useState(true);
  const { listItem, iconStyle, headerStyle } = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const createListItems = (itemsArray) => {
    return (
      <Fragment>
        {itemsArray.map(({ id, title, href, icon }) => {
          return (
            <ListItem key={id} className={listItem}>
              <SideMenuLink href={href} icon={icon} text={title} />
            </ListItem>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ListItem className={listItem}>
        <div onClick={handleClick} className={headerStyle}>
          {icon}
          <h3>{header}</h3>
          {open ? <ExpandMore className={iconStyle} /> : <ChevronRightIcon className={iconStyle} />}
        </div>
      </ListItem>
      <Collapse in={open}>
        <List style={{ padding: 0 }} component="div">
          {createListItems(items)}
        </List>
      </Collapse>
    </Fragment>
  );
};

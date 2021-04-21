/* eslint-disable no-shadow */
// eslint-disable-next-line prettier/prettier
import {
  Collapse,
  ListItem,
  ListItemText,
  List,
  Link,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment, useState } from 'react';

const useStyles = makeStyles(
  ({ palette: { primary, secondary, blueLight } }) => ({
    listItem: {
      cursor: 'pointer',
      position: 'relative',
      paddingLeft: 24,
    },
    link: {
      color: blueLight,
      fontSize: '1.37rem',
      position: 'relative',
    },
    linkInner: {
      color: blueLight,
      paddingLeft: 8, // 16 + 8, 16 у внешнего списка
      opacity: 0.6,
      fontSize: '1.37rem',
      '&:hover': {
        color: secondary.main,
        opacity: 1,
        textDecoration: 'none',
      },
    },
    iconStyle: {
      color: blueLight,
      fontSize: '2rem',
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    listItemInner: {
      '&:hover': {
        backgroundColor: primary.main,
      },
    },
  })
);

export const CollapsebleListItem = ({ header, icon, items }) => {
  const [open, setOpen] = useState(false);
  const { listItem, link, linkInner, iconStyle, listItemInner } = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const createListItems = (itemsArray) => {
    return (
      <Fragment>
        {itemsArray.map(({ id, title, href, icon }) => {
          return (
            <ListItem key={id} className={listItemInner}>
              {icon}
              <Link href={href} className={linkInner}>
                {title}
              </Link>
            </ListItem>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ListItem className={listItem} onClick={handleClick}>
        {icon}
        <ListItemText className={link} primary={header} />
        {open ? (
          <ExpandLess className={iconStyle} />
        ) : (
          <ExpandMore className={iconStyle} />
        )}
      </ListItem>
      <Collapse in={open}>
        <List component="div">{createListItems(items)}</List>
      </Collapse>
    </Fragment>
  );
};

import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CollapsebleListItem } from './CollapsableListItem';
import { SideMenuLink } from './SideMenuLink';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  listItemStyle: {
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: primary.main,
    },
  },
  // eslint-disable-next-line prettier/prettier
}));

const SideMenuList = ({ list }) => {
  const { listItemStyle } = useStyles();
  const createMenu = (menuArray) => {
    return menuArray.map((item) => {
      if (Object.keys(item).includes('items')) {
        return <CollapsebleListItem key={item.id} {...item} />;
      }
      return (
        <ListItem key={item.id} className={listItemStyle}>
          <SideMenuLink
            href={item.href}
            icon={item.icon}
            text={item.title}
            style={{ opacity: 1 }}
          />
        </ListItem>
      );
    });
  };

  return <List style={{ padding: 0 }}>{createMenu(list)}</List>;
};

export { SideMenuList };

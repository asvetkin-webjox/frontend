import IconButton from '@material-ui/core/IconButton';
import { AuthContext } from 'state/context/auth-context';
import { SideMenuContext } from 'state/context/sideMenu-context';

import { MenuIcon } from 'components/UI/Icons/MenuIcon';
import { useContext } from 'react';

const SideMenuOpenButton = () => {
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  const { handleSideMenuOpen } = useContext(SideMenuContext);

  return isAuth ? (
    <IconButton
      onClick={handleSideMenuOpen}
      style={{ padding: 0, marginRight: 15, transform: 'translateY(-3px)' }}
    >
      <MenuIcon />
    </IconButton>
  ) : null;
};

export { SideMenuOpenButton };

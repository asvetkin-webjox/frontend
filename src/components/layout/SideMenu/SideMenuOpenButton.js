import IconButton from '@material-ui/core/IconButton';
import { AuthContext } from 'components/state/context/auth-context';
import { SideMenuContext } from 'components/state/context/sideMenu-context';

import { MenuIcon } from 'components/UI/Icons/MenuIcon';
import { useContext } from 'react';

const SideMenuOpenButton = () => {
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  const {
    sideMenuState: { isSideMenuOpen },
    handleSideMenuOpen,
  } = useContext(SideMenuContext);

  return isAuth && !isSideMenuOpen ? (
    <IconButton onClick={handleSideMenuOpen} style={{ padding: 0, transform: 'translateY(-3px)' }}>
      <MenuIcon />
    </IconButton>
  ) : null;
};

export { SideMenuOpenButton };

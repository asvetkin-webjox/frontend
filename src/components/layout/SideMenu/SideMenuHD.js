import { IconButton } from '@material-ui/core';
import { ArrowIcon } from 'components/UI/Icons/ArrowIcon';
import { useContext, useEffect } from 'react';
import { SideMenuContext } from 'state/context/sideMenu-context';
import { ACCOUNT_MENU } from './menu.config';
import { SideMenuFooter } from './SIdeMenuFooter';
import { SideMenuList } from './SideMenuList';

const SideMenuHD = () => {
  const {
    sideMenuState: { isSideMenuOpen },
    handleSideMenuOpen,
    handleSideMenuClose,
  } = useContext(SideMenuContext);

  useEffect(() => {
    handleSideMenuOpen();
  }, []);

  const { content } = ACCOUNT_MENU;

  return (
    <div
      style={
        isSideMenuOpen
          ? { width: 214, transform: 'translate(-20px, -10px)', position: 'relative' }
          : { display: 'none' }
      }
    >
      <div
        style={
          isSideMenuOpen
            ? { display: 'block', position: 'absolute', top: 5, left: -25, zIndex: 999 }
            : { display: 'none' }
        }
      >
        <IconButton onClick={handleSideMenuClose}>
          <ArrowIcon />
        </IconButton>
      </div>
      <SideMenuList list={content} />
      <div style={{ transform: 'translateY(300px)' }}>
        <SideMenuFooter />
      </div>
    </div>
  );
};

export { SideMenuHD };

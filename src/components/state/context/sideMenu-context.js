import { createContext, useReducer } from 'react';
import { SIDE_MENU_CLOSE, SIDE_MENU_OPEN } from '../constants';
import { sideMenuReducer } from '../reducers/sideMenuReduser';

export const SideMenuContext = createContext();

const SideMenuContextProvider = ({ children }) => {
  const [sideMenuState, dispatch] = useReducer(sideMenuReducer, { isSideMenuOpen: false });

  const handleSideMenuOpen = () => {
    dispatch({ type: SIDE_MENU_OPEN });
  };

  const handleSideMenuClose = () => {
    dispatch({ type: SIDE_MENU_CLOSE });
  };

  return (
    <SideMenuContext.Provider
      value={{ sideMenuState, handleSideMenuClose, handleSideMenuOpen, dispatch }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};

export default SideMenuContextProvider;

import { SIDE_MENU_CLOSE, SIDE_MENU_OPEN } from '../constants';

const sideMenuReducer = (state, { type }) => {
  switch (type) {
    case SIDE_MENU_OPEN:
      return {
        ...state,
        isSideMenuOpen: true,
      };
    case SIDE_MENU_CLOSE:
      return {
        ...state,
        isSideMenuOpen: false,
      };
    default:
      throw new Error(`Side Menu. Unsupported action type: ${type}`);
  }
};

export { sideMenuReducer };

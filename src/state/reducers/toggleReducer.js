import { MENU_OPEN, DIMMED_BG, RESET } from 'state/constants';
import { ifToggled } from 'state/actions/toggle-action';

export const toggleReducer = (currentState, { type }) => {
  const { dimmed, toggledMenu } = currentState;

  switch (type) {
    case MENU_OPEN:
      return {
        ...currentState,
        toggledMenu: ifToggled(toggledMenu),
        dimmed: ifToggled(dimmed),
      };
    case DIMMED_BG:
      return {
        ...currentState,
        dimmed: ifToggled(dimmed),
      };
    case RESET: {
      return {
        dimmed: false,
        toggledMenu: false,
      };
    }
    default:
      throw new Error('Error in toggleReducer');
  }
};

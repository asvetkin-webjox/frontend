import { SET_SEARCH, CLEAR_SEARCH } from 'state/constants';

export const searchReducer = (currentState, { text, type }) => {
  switch (type) {
    case SET_SEARCH:
      return { ...currentState, isCtxSearch: text };
    case CLEAR_SEARCH:
      return { ...currentState, isCtxSearch: false };
    default:
      throw new Error('Error in authReducer');
  }
};

import { failedLogin, successRegister } from 'utils/messages';
import { cookiesClear } from 'components/state/cookies';
import { SUCCESS, ERROR, LOGOUT, SUCCESS_REGISTER } from 'components/state/constants';

export const authReducer = (currentState, { message, type }) => {
  switch (type) {
    case SUCCESS_REGISTER:
      return { ...currentState, message: successRegister() };
    case SUCCESS:
      return {
        ...currentState,
        isAuth: true,
        auth: localStorage.setItem('isAuth', true),
      };
    case ERROR:
      return { ...currentState, message: failedLogin(message) };
    case LOGOUT:
      return {
        ...currentState,
        isAuth: false,
        cookie: cookiesClear(),
        session: localStorage.setItem('isAuth', false),
      };
    default:
      throw new Error('Error in authReducer');
  }
};

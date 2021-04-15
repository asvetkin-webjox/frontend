import Cookies from 'js-cookie';
import { futureTime } from 'utils/futureTime';

export const cookiesClear = () => Cookies.remove('token_app');

/* expires in futureTime(60) 60 minutes */
export const cookiesSet = (name, time = 3600) =>
  Cookies.set('token_app', name, {
    expires: futureTime(time),
  });

export const cookiesGet = (name = 'token_app') => Cookies.get(name);

export const cookieCheck = () => !!Cookies.get('token_app');

// Cookies.set('token', json.token, { expires: 30, secure: true });

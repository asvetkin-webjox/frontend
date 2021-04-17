import { useContext, useState } from 'react';
import { AuthContext } from 'components/state/context/auth-context';
import { SUCCESS } from 'components/state/constants';
import { cookiesSet } from 'components/state/cookies';
import { URL } from 'backend/config';
import { headers } from 'config/config';

export const useAuth = ({ mail: username, password }, handleClose) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isError, setError] = useState(false);
  const [isReset, setReset] = useState(false);
  const { dispatch } = authContext;

  const loginHandler = async () => {
    setLoading(true);
    setError(false);
    const loginUrl = 'http://45.80.71.95:3000/login';

    const body = JSON.stringify({
      username: 123,
      password: 123,
    });

    const { loginHeader } = headers;
    try {
      const res = await fetch(loginUrl, loginHeader(body));
      console.log('loginHandler -> res', res);

      const { token } = await res.json();

      dispatch({ type: SUCCESS });

      sessionStorage.setItem('isAuth', true);
      cookiesSet(token, 600000);
    } catch (error) {
      setError(error);
    }

    return setLoading(false);
  };

  const registerHandler = async () => {
    setLoading(true);
    setError(false);

    try {
      /* send e-mail to user */
      // await sendMail()

      setRegistered(true);
    } catch (error) {
      setError(error);
    }

    return setLoading(false);
  };

  const resetHandler = async () => {
    setLoading(true);
    setError(false);

    try {
      // await sendMail()

      setReset('Restablecimiento de contraseña');
    } catch (error) {
      setError(error);
    }

    return setLoading(false);
  };

  return {
    isLoading,
    loginHandler,
    registerHandler,
    resetHandler,
    isError,
    setError,
    isRegistered,
    isReset,
  };
};

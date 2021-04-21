import { useContext, useState } from 'react';
import { AuthContext } from 'components/state/context/auth-context';
import { SUCCESS } from 'components/state/constants';
import { cookiesSet } from 'components/state/cookies';
import { headers, URL, body } from 'config/config';

export const useAuth = (
  { mail: username, password, repeat: passwordRetyped },
  handlePass,
  handleClose,
) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isAuthError, setError] = useState(false);
  const [isReset, setReset] = useState(false);
  const { dispatch } = authContext;
  const loginUrl = `${URL}/login`;
  const registerUrl = `${URL}/signup`;
  const resetUrl = `${URL}/forget?username=${username}`;

  const loginBody = body({ username, password });
  const registerBody = body({ username, password, passwordRetyped });
  const { postHeader, getHeader } = headers;

  const loginHandler = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(loginUrl, postHeader(loginBody));
      console.log('loginHandler -> res', res);

      const { token } = await res.json();

      if (token) {
        dispatch({ type: SUCCESS });
        sessionStorage.setItem('isAuth', true);
        cookiesSet(token, 600000);
        handleClose();
      }
    } catch (error) {
      setError(error);
    }

    return setLoading(false);
  };

  const registerHandler = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(registerUrl, postHeader(registerBody));
      const data = await res.text();
      console.log('registerHandler -> data', data);

      dispatch({ type: SUCCESS });
      sessionStorage.setItem('isAuth', true);
      handleClose();

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
      const res = await fetch(resetUrl, getHeader());
      console.log('resetHandler -> res', res);
      const data = await res.text();
      console.log('resetHandler -> data', data);

      setReset(true);
    } catch (error) {
      console.log('resetHandler -> error', error);
      setError(error);
    }

    return setLoading(false);
  };

  return {
    isLoading,
    loginHandler,
    registerHandler,
    resetHandler,
    isAuthError,
    setError,
    isRegistered,
    isReset,
  };
};

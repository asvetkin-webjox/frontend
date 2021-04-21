import { useContext, useState } from 'react';
import { AuthContext } from 'state/context/auth-context';
import { SUCCESS } from 'state/constants';
import { cookiesSet } from 'state/cookies';
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

  const authHandler = async (data = {}, status = '') => {
    const { url, header } = data;
    setLoading(true);
    setError(false);
    setReset(false);

    try {
      const res = await fetch(url, header);
      const { error, token = '' } = await res.json();

      if (status === 'reset' && !error) setReset(true);
      if (error) setError(error);

      if (token) {
        dispatch({ type: SUCCESS });
        sessionStorage.setItem('isAuth', true);
        cookiesSet(token, 600000);
        handleClose();

        if (status === 'register') setRegistered(true);
      }
    } catch ({ error = 'Неизвестная ошибка' }) {
      setError(error);
    }

    return setLoading(false);
  };

  const loginHandler = () => authHandler({ url: loginUrl, header: postHeader(loginBody) });
  const registerHandler = () =>
    authHandler({ url: registerUrl, header: postHeader(registerBody) }, 'register');
  const resetHandler = () => authHandler({ url: resetUrl, header: getHeader() }, 'reset');

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

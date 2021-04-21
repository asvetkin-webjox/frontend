import React, { useReducer, createContext, useEffect } from 'react';
import { authReducer } from 'state/reducers/authReducer';
import { LOGOUT } from 'state/constants';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuth: false,
    message: false,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: LOGOUT });
    }, 1800000);
  }, []);

  /* check if user session is alive */
  if (process.browser) {
    const session = localStorage.getItem('isAuth');

    if (JSON.parse(session)) authState.isAuth = true;
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const ID_REGISTER = 'Register';
export const ID_LOGIN = 'Login';
export const ID_FORGOT = 'Forgot';
export const ID_LOGOUT = 'Logout';

export const headers = {
  loginHeader: (body) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }),
  getHeader: () => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  sessionHeader: (token) => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }),
  captchaHeader: (token) => ({
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: `${token}`,
    },
  }),
};

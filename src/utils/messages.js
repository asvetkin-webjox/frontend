const messages = {
  sucessLogin: (msg) => msg || 'Успешная авторизация',
  failedLogin: (msg) => msg || 'Не удалось авторизироваться',
  sucessRegistration: (msg) => msg || 'Успешная регистрация',
  failedRegistration: (msg) => msg || 'Не удалось зарегистрироваться',
  inProcess: (msg) => msg || 'Авторизируемся...',
  successRegister: (msg) => msg || 'Success registration. Please check e-mail',
};

export const {
  sucessLogin,
  failedLogin,
  sucessRegistration,
  failedRegistration,
  inProcess,
  successRegister,
} = messages;

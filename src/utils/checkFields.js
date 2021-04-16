export const checkEmail = (email) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = email && !!email.match(regex);

  return check;
};

export const checkPassword = (pswd) => {
  const arr = pswd.split('');

  if (arr.length < 7) return false;
  if (!pswd.match(/[a-z]/i)) return false;
  // if (!pswd.match(/[A-Z]/)) return false;
  if (!pswd.match(/[0-9]/)) return false;

  return true;
};

/* if object all values are false, return true, ow return false */
export const ifAllFalse = (object) => {
  const values = Object.values(object);
  const checkValue = values.filter((v) => v).length === 0;

  if (checkValue) return true;

  return false;
};

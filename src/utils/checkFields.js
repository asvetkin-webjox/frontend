export const checkEmail = (email) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = email && !!email.match(regex);

  return check;
};

export const checkPassword = (pswd) => {
  const arr = pswd.split('');

  if (arr.length < 7 || !pswd.match(/[a-z]/i) || !pswd.match(/[0-9]/)) return false;
  // if (!pswd.match(/[A-Z]/)) return false;

  return true;
};

/* if object all values are false, return true, or return false */
export const ifAllFalse = (object) => {
  const values = Object.values(object);
  const checkValue = values.filter(Boolean).length === 0;

  if (checkValue) return true;

  return false;
};

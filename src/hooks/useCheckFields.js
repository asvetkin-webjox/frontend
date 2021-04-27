import { useEffect, useState } from 'react';
import { modalMessages } from 'lib/messages';
import { ifAllFalse, checkEmail } from 'utils/checkFields';
import { ID_LOGIN, ID_FORGOT, ID_REGISTER } from 'config/config';

export const useCheckFields = ({ isInputs }, isOpened, isAccept) => {
  const {
    shortPassword,
    weakPassword,
    wrongEmail,
    wrongPhone,
    wrongRetypePass,
    notAccepted,
  } = modalMessages;
  const { mail = '', password = '', phone = '', repeat = '', name = '', surname = '' } = isInputs;
  const registerInputs = { mail, password, phone, repeat, name, surname, terms: isAccept };
  const loginInputs = { mail, password };
  const forgotInputs = { mail };
  const [isErrors, setErrors] = useState(false);

  const [isPassed, setPassed] = useState(true);

  // const conditionsLogin = [!checkEmail(mail), password.length < 8];
  // const conditionsForgot = [!checkEmail(mail)];

  const conditions = {
    mail: !checkEmail(mail) && wrongEmail,
    password:
      (password.length < 8 && shortPassword) ||
      ((!password.match(/[a-z]/i) || !password.match(/[0-9]/)) && weakPassword),
    phone: phone.length < 10 && wrongPhone,
    repeat: (repeat === '' || password !== repeat) && wrongRetypePass,
    terms: !isAccept && notAccepted,
    name: !name,
    surname: !surname,
  };

  const checkConditions = (conds, strict = true) => {
    const arrFromObj = Object.keys(conds);

    arrFromObj.map((condition) => {
      if (conds[condition] === '') {
        setErrors((state) => ({
          ...state,
          [condition]: 'Поле не заполнено',
        }));
      } else if (conditions[condition] && strict) {
        setErrors((state) => ({
          ...state,
          [condition]: conditions[condition],
        }));
      }
    });
  };

  useEffect(() => {
    setPassed(true);
    setErrors(true);
  }, [isOpened]);

  useEffect(() => {
    setErrors(false);
    if (isOpened === ID_LOGIN) return checkConditions(loginInputs, false);
    if (isOpened === ID_FORGOT) return checkConditions(forgotInputs, false);
    if (isOpened === ID_REGISTER) checkConditions(registerInputs);
  }, [isInputs, isAccept, isOpened]);

  const handlePass = () => {
    const checked = ifAllFalse(isErrors);

    if (checked) return setPassed(true);

    return setPassed(false);
  };

  return { isErrors, handlePass, isPassed, setPassed };
};

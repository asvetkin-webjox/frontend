import { useEffect, useState } from 'react';
import { modalMessages } from 'lib/messages';
import { ifAllFalse, checkEmail } from 'utils/checkFields';

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
  const allInputs = { mail, password, phone, repeat, name, surname, terms: isAccept };
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

  const checkConditions = (conds) => {
    const arrFromObj = Object.keys(conds);

    arrFromObj.map((condition) => {
      if (conds[condition] === '') {
        setErrors((state) => ({
          ...state,
          [condition]: 'Поле не заполнено',
        }));
      } else if (conditions[condition]) {
        setErrors((state) => ({
          ...state,
          [condition]: conditions[condition],
        }));
      }
    });
  };

  useEffect(() => {
    setPassed(true);
    setErrors(false);
  }, [isOpened]);

  useEffect(() => {
    setErrors(false);
    // if (isOpened === 'Login') return setErrors(false);
    // if (isOpened === 'Forgot') return setErrors(false);

    return checkConditions(allInputs);
  }, [isInputs, isAccept]);

  const handlePass = () => {
    const checked = ifAllFalse(isErrors);

    if (checked) return setPassed(true);

    return setPassed(false);
  };

  return { isErrors, handlePass, isPassed, setPassed };
};

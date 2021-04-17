import { useEffect, useState } from 'react';
import { modalMessages } from 'lib/messages';
import { ifAllFalse, checkEmail } from 'utils/checkFields';

export const useCheckFields = ({ isInputs }, isOpened, isTerms) => {
  const {
    shortPassword,
    weakPassword,
    wrongEmail,
    wrongPhone,
    wrongRetypePass,
    wrongName,
    notAccepted,
    wrongSurname,
  } = modalMessages;
  const { password = '', mail = '', phone = '', repeat = '', name = '', surname = '' } = isInputs;
  const [isErrors, setErrors] = useState(false);

  const [isPassed, setPassed] = useState(true);
  const conditions = [
    !checkEmail(mail),
    password.length < 8,
    !password.match(/[a-z]/i) || !password.match(/[0-9]/),
    phone.length < 10,
    repeat === '' || password !== repeat,
    !name,
    !surname,
    // !isTerms,
  ];
  const conditionsLogin = [password.length < 8, !checkEmail(mail)];
  const conditionsForgot = [!checkEmail(mail)];
  // const loginTexts = [password.length < 8, !checkEmail(mail)];
  const texts = [
    { mail: wrongEmail },
    { password: shortPassword },
    { password: weakPassword },
    { phone: wrongPhone },
    { repeat: wrongRetypePass },
    { name: wrongName },
    { surname: wrongSurname },
    { terms: notAccepted },
  ];

  const checkConditions = (conds) =>
    conds.map((condition, i) => {
      if (condition)
        setErrors((state) => ({
          ...state,
          [Object.keys(texts[i])]: Object.values(texts[i]),
        }));
    });

  useEffect(() => {
    setPassed(true);
  }, [isOpened]);

  useEffect(() => {
    setErrors(false);
    if (isOpened === 'Login') return checkConditions(conditionsLogin);
    if (isOpened === 'Forgot') return checkConditions(conditionsForgot);

    return checkConditions(conditions);
  }, [isInputs, isTerms, isOpened]);

  const handlePass = () => {
    const checked = ifAllFalse(isErrors);
    // setErrors(!checked);
    if (checked) return setPassed(true);

    return setPassed(false);
  };

  return { isErrors, handlePass, isPassed, setPassed };
};

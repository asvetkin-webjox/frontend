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
    password.length < 8,
    !password.match(/[a-z]/i) || !password.match(/[0-9]/),
    !checkEmail(mail),
    phone.length < 10,
    repeat === '' || password !== repeat,
    !name,
    !surname,
    !isTerms,
  ];
  const texts = [
    { password: shortPassword },
    { password: weakPassword },
    { mail: wrongEmail },
    { phone: wrongPhone },
    { repeat: wrongRetypePass },
    { name: wrongName },
    { surname: wrongSurname },
    { terms: notAccepted },
  ];

  useEffect(() => {
    setPassed(true);
  }, [isOpened]);

  useEffect(() => {
    setErrors(false);
    conditions.map((condition, i) => {
      if (condition)
        setErrors((state) => ({
          ...state,
          [Object.keys(texts[i])]: Object.values(texts[i]),
        }));
    });
  }, [isInputs, isTerms]);

  const handlePass = () => {
    const checked = ifAllFalse(isErrors);

    if (checked) return setPassed(true);

    return setPassed(false);
  };

  return { isErrors, handlePass, isPassed };
};

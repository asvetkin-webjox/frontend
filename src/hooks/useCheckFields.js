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

    // if (password.length < 8)
    //   setErrors((state) => ({
    //     ...state,
    //     password: shortPassword,
    //   }));
    // if (!password.match(/[a-z]/i) || !password.match(/[0-9]/))
    //   setErrors((state) => ({
    //     ...state,
    //     password: weakPassword,
    //   }));
    // if (!checkEmail(mail))
    //   setErrors((state) => ({
    //     ...state,
    //     mail: wrongEmail,
    //   }));
    // if (phone.length < 10)
    //   setErrors((state) => ({
    //     ...state,
    //     phone: wrongPhone,
    //   }));
    // if (repeat === '' || password !== repeat)
    //   setErrors((state) => ({
    //     ...state,
    //     repeat: wrongRetypePass,
    //   }));
    // if (!name)
    //   setErrors((state) => ({
    //     ...state,
    //     name: wrongName,
    //   }));
    // if (!surname)
    //   setErrors((state) => ({
    //     ...state,
    //     surname: wrongSurname,
    //   }));
    // if (!isTerms)
    //   setErrors((state) => ({
    //     ...state,
    //     terms: notAccepted,
    //   }));

    // if (isErrors) return;
  }, [isInputs, isTerms]);

  const handlePass = () => {
    const checked = ifAllFalse(isErrors);

    if (checked) return setPassed(true);

    return setPassed(false);
  };

  return { isErrors, handlePass, isPassed };
};

// /* PASSWORD */
// useEffect(() => {
//   if (password.length < 8)
//     return setErrors((state) => ({
//       ...state,
//       password: shortPassword,
//     }));
//   if (!password.match(/[a-z]/i) || !password.match(/[0-9]/))
//     return setErrors((state) => ({
//       ...state,
//       password: weakPassword,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     password: false,
//   }));
// }, [password]);

// /* E-MAIL */
// useEffect(() => {
//   if (!checkEmail(mail))
//     return setErrors((state) => ({
//       ...state,
//       mail: wrongEmail,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     mail: false,
//   }));
// }, [mail]);

// /* PHONE */
// useEffect(() => {
//   if (phone.length < 10)
//     return setErrors((state) => ({
//       ...state,
//       phone: wrongPhone,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     phone: false,
//   }));
// }, [phone]);

// /* RETYPE */
// useEffect(() => {
//   if (repeat === '' || password !== repeat)
//     return setErrors((state) => ({
//       ...state,
//       repeat: wrongRetypePass,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     repeat: false,
//   }));
// }, [repeat, password]);

// /* NAME AND SURNAME */
// useEffect(() => {
//   if (!name)
//     return setErrors((state) => ({
//       ...state,
//       name: wrongName,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     name: false,
//   }));
// }, [name]);

// useEffect(() => {
//   if (!surname)
//     return setErrors((state) => ({
//       ...state,
//       surname: wrongSurname,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     surname: false,
//   }));
// }, [surname]);

// /* TERMS */
// useEffect(() => {
//   if (!isTerms)
//     return setErrors((state) => ({
//       ...state,
//       terms: notAccepted,
//     }));

//   return setErrors((state) => ({
//     ...state,
//     terms: false,
//   }));
// }, [isTerms]);

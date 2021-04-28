import { useState } from 'react';

export const useInputHandler = (isFilter, regex) => {
  const [isInputs, setInputs] = useState({});

  const inputHandler = (type) => (e) => {
    const { value } = e.target;
    // const timeOutId = setTimeout(() => {
    setInputs((state) => ({
      ...state,
      [type]: isFilter ? value.replace(regex, '') : value,
    }));
    // }, 200);
    // return () => clearTimeout(timeOutId);
  };

  return { isInputs, inputHandler, setInputs };
};

import { useState } from 'react';

export const useInputHandler = () => {
  const [isInputs, setInputs] = useState({});

  const inputHandler = (type) => (e) => {
    const timeOutId = setTimeout(() => {
      setInputs((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    }, 100);
    return () => clearTimeout(timeOutId);
  };

  return { isInputs, inputHandler };
};

import { useState } from 'react';

export const useInputHandler = () => {
  const [isInputs, setInputs] = useState({});

  const inputHandler = (type) => (e) => {
    const { value } = e.target;
    const timeOutId = setTimeout(() => {
      setInputs((state) => ({
        ...state,
        [type]: value,
      }));
    }, 200);
    return () => clearTimeout(timeOutId);
  };

  return { isInputs, inputHandler };
};

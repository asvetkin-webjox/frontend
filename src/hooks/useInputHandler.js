import { useState } from 'react';

export const useInputHandler = () => {
  const [isInputs, setInputs] = useState({});

  const inputHandler = (type) => (e) => {
    const timeOutId = setTimeout(() => {
      setInputs({
        ...isInputs,
        [type]: e.target.value,
      });
    }, 300);
    return () => clearTimeout(timeOutId);
  };

  return { isInputs, inputHandler };
};

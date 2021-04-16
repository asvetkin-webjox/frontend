import { useState } from 'react';

export const useToggle = (init = false) => {
  const [isToggle, setToggle] = useState(init);

  const toggleHandler = () => setToggle((o) => !o);
  const toggleOff = () => setToggle(false);

  return { isToggle, toggleHandler, setToggle, toggleOff };
};
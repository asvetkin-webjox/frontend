import { useState } from 'react';

export const useSelect = (defaultName) => {
  const [isSelected, setSelected] = useState(defaultName);

  const selectHandler = (e) => {
    const { id } = e.target;
    setSelected(id);
  };

  return { isSelected, selectHandler };
};

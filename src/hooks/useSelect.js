import { useState } from 'react';

export const useSelect = () => {
  const [isSelected, setSelected] = useState('');

  const selectHandler = (e) => {
    const { id } = e.target;
    setSelected(id);
  };

  return { isSelected, selectHandler };
};

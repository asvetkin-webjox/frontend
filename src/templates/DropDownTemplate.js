import React from 'react';
import { useSelect } from 'hooks/useSelect';

export const DropDownTemplate = ({ name, children, styles, isToggle, toggleOn, id }) => {
  const { container, title, content } = styles;
  const { selectHandler, isSelected } = useSelect('Компания');

  const handlers = { toggleOn, selectHandler };

  return (
    <div className={container} onClick={toggleOn} id={id}>
      <div className={title} id={id}>{`${name}: ${isSelected}`}</div>
      {isToggle && <div className={content}>{children(handlers)}</div>}
    </div>
  );
};

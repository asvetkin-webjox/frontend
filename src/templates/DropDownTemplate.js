import React from 'react';
import { useSelect } from 'hooks/useSelect';

export const DropDownTemplate = ({ name, children, styles, isToggle, toggleOn }) => {
  const { container, title, content } = styles;
  const { selectHandler, isSelected } = useSelect();

  const handlers = { toggleOn, selectHandler };

  return (
    <div className={container} onClick={toggleOn}>
      <div className={title}>{`${name}: ${isSelected}`}</div>
      {isToggle && <div className={content}>{children(handlers)}</div>}
    </div>
  );
};

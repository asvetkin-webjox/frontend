import React from 'react';

export const CustomButton = ({ modalHandler, id = '', name, styles, handlePass }) => {
  const handlers = (e) => {
    if (modalHandler) modalHandler(e);
    if (handlePass) handlePass();
  };

  return (
    <div className={styles} id={id} onClick={handlers}>
      {name}
    </div>
  );
};

import React from 'react';

export const CustomButton = ({ handler, id = '', name, styles }) => {
  // const handlers = (e) => {
  //   if (modalHandler) modalHandler(e);
  //   if (handlePass) handlePass();
  //   if (loginHandler) loginHandler();
  // };

  return (
    <div className={styles} id={id} onClick={handler}>
      {name}
    </div>
  );
};

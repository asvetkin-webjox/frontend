import React from 'react';

export const CustomButton = ({ modalHandler, id = '', name, styles }) => {
  return (
    <div className={styles} id={id} onClick={modalHandler}>
      {name}
    </div>
  );
};

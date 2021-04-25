import React from 'react';

export const CustomButton = ({ handler, id = '', name, styles }) => {
  return (
    <div className={styles} id={id} onClick={handler}>
      {name}
    </div>
  );
};

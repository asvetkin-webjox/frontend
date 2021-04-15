import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  shared: {
    cursor: 'pointer',
  },
}));

export const ModalButton = ({ name, id, twoFunc, style }) => {
  const { shared } = useStyles();

  return (
    <div className={`${style} ${shared}`} id={id} onClick={twoFunc}>
      {name}
    </div>
  );
};

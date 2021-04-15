import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sharedStyles } from 'lib/sharedStyles';

const useStyles = makeStyles(({ palette: { blue, border } }) => ({
  container: {
    border: `1px solid ${border}`,
    '&:hover': {
      backgroundColor: blue,
      border: `1px solid transparent`,
    },
  },
}));

export const BlackButton = ({ modalHandler, id, name }) => {
  const { container } = useStyles();
  const { button } = sharedStyles();

  return (
    <div className={`${container} ${button}`} id={id} onClick={modalHandler}>
      {name}
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '16px',
    fontSize: '16px',
    fontStyle: 'italic',
  },
}));

export const NothingFound = ({}) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <div>Ничего не найдено</div>
    </div>
  );
};

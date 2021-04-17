import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '16px',
    fontSize: '16px',
    fontStyle: 'italic',
    [breakpoints.down('sm')]: {
      height: '100%',
      alignItems: 'center',
    },
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

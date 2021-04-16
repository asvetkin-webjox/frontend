import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    right: '10px',
    top: '14px',
    display: 'flex',
    cursor: 'pointer',
  },
}));

export const ShowPassword = ({ toggleHandler }) => {
  const { container } = useStyles();

  return (
    <div className={container} onClick={toggleHandler}>
      <img src="/icons/eye.svg" />
    </div>
  );
};

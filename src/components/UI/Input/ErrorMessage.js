import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { accent } }) => ({
  container: {
    position: 'absolute',
    bottom: '-15px',
    left: '4px',
    fontSize: '10px',
    fontStyle: 'italic',
    color: accent,
  },
}));

export const ErrorMessage = ({ name, message }) => {
  const { container } = useStyles();

  return <div className={container}>{message[name]}</div>;
};

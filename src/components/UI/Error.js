import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { accent } }) => ({
  container: {
    position: 'absolute',
    left: '50%',
    bottom: ({ position }) => `${position}px`,
    transform: 'translateX(-50%)',
    fontSize: '12px',
    fontStyle: 'italic',
    color: accent,
  },
}));

export const Error = ({ name, position = '-17' }) => {
  const { container } = useStyles({ position });

  return <div className={container}>{name}</div>;
};

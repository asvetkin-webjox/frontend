import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { accent } }) => ({
  container: {
    position: 'absolute',
    left: '0',
    bottom: ({ position }) => `${position}px`,
    // width: '100%',
    // transform: 'translateX(-50%)',
    fontSize: '10px',
    fontStyle: 'italic',
    color: ({ color }) => color || accent,
  },
}));

export const Error = ({ name, position = '-17', color }) => {
  const { container } = useStyles({ position, color });

  return <div className={container}>{name}</div>;
};

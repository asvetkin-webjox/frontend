import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    left: '18px',
    top: '12px',
    zIndex: '2',
  },
}));

export const InputIcon = ({ url }) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <img src={url} style={{ height: '16px' }} />
    </div>
  );
};

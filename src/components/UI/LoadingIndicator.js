import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { Spinner } from 'components/UI/Spinner';

const useStyles = makeStyles(({ palette: { accent } }) => ({
  styling: {
    color: accent,
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    transform: 'translate(-50%,-50%)',
  },
  root: {
    color: ({ color }) => color,
  },
}));

export const LoadingIndicator = ({ size = 40, centered = false, color = '#0AEA83' }) => {
  const { spinner, styling, root } = useStyles({ color });
  const styles = {
    classes: { root },
  };

  return (
    <div className={centered ? spinner : ''}>
      <Spinner />
      {/* <CircularProgress classes={{ root: styling }} size={size} {...styles} /> */}
    </div>
  );
};

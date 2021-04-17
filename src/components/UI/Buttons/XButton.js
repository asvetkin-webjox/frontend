import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'absolute',
    right: '-6px',
    top: '-4px',
  },
  icon: {
    '& svg': {
      fontSize: 35,
    },
  },
}));

export const XButton = ({ handleClose }) => {
  const { container, icon } = useStyles();

  return (
    <div className={container}>
      <IconButton
        edge="start"
        style={{ color: '#717FB0' }}
        onClick={handleClose}
        aria-label="close"
        className={icon}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

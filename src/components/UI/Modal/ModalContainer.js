import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(({ palette: { primary }, shadow }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '370px',
    padding: '24px',
    backgroundColor: primary.dim,
    boxShadow: shadow.primary,
    outline: 'none',
    borderRadius: '4px',
  },
}));

export const ModalContainer = ({ children, handleClose, isOpened, id }) => {
  const { container, paper } = useStyles();

  return (
    <Modal
      className={container}
      open={isOpened === id}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      keepMounted
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={isOpened === id}>
        <div className={paper}>{children}</div>
      </Fade>
    </Modal>
  );
};

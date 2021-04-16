import React, { useState } from 'react';
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
  /* make modal keepMounted on first loading only */
  const [isFirst, setFirst] = useState(true);
  const firstHandler = () => setFirst(false);
  const mergeFunc = () => [firstHandler(), handleClose()];

  return (
    <Modal
      className={container}
      open={isOpened === id}
      onClose={mergeFunc}
      closeAfterTransition
      BackdropComponent={Backdrop}
      keepMounted={isFirst}
      disablePortal
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

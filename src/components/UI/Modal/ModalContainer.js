import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(({ breakpoints, palette: { primary }, shadow }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    width: '370px',
    padding: '24px',
    backgroundColor: primary.dim,
    boxShadow: shadow.primary,
    outline: 'none',
    borderRadius: '4px',
    overflowY: 'scroll',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100vh',
      margin: '0 auto',
      zIndex: '0',
      backgroundColor: '#000',
      opacity: ({ isToggle }) => (isToggle ? '0.5' : '1'),
      width: ({ isToggle }) => (isToggle ? '100%' : '0%'),
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
}));

export const ModalContainer = ({ children, handleClose, isOpened, id, isToggle }) => {
  const { container, paper } = useStyles({ isToggle });
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
      // keepMounted={isFirst}
      disablePortal
      BackdropProps={{
        timeout: 200,
        style: { backgroundColor: '#000', opacity: '0.37' },
      }}
    >
      {/* <Fade in={isOpened === id}> */}
      <div className={paper}>{children}</div>
      {/* </Fade> */}
    </Modal>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { SocialModal } from 'components/layout/Modals/SocialModal';
import { ModalHeader } from 'components/layout/Modals/ModalHeader';
import { useInputHandler } from 'hooks/useInputHandler';
import { useCheckFields } from 'hooks/useCheckFields';
import { useToggle } from 'hooks/useToggle';
import { useAuth } from 'hooks/useAuth';

const useStyles = makeStyles(({ palette: { blueLight } }) => ({
  container: {
    textAlign: 'center',
  },
  divider: {
    background: blueLight,
  },
}));

export const RegisterTemplate = ({ children, name, isOpened, handleClose }) => {
  const { container, divider } = useStyles();
  const { ...inputs } = useInputHandler();
  const { isInputs } = inputs;
  const { handlePass, ...errors } = useCheckFields(inputs, isOpened);
  const { ...toggle } = useToggle(false);
  const { loginHandler, ...auth } = useAuth(isInputs, handleClose);
  const combinedFunc = () => [handlePass(), loginHandler()];
  const combinedObject = { ...inputs, ...errors, ...toggle, ...auth, combinedFunc };

  return (
    <div className={container}>
      <ModalHeader name={name} />
      {children(combinedObject)}
      <div style={{ marginBottom: '20px' }}>
        <Divider classes={{ root: divider }} />
      </div>
      <SocialModal name={name} />
    </div>
  );
};

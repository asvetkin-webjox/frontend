import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { SocialModal } from 'components/layout/Modals/SocialModal';
import { ModalHeader } from 'components/layout/Modals/ModalHeader';
import { useInputHandler } from 'hooks/useInputHandler';
import { useCheckFields } from 'hooks/useCheckFields';
import { useToggle } from 'hooks/useToggle';
import { useAuth } from 'hooks/useAuth';
import { XButton } from 'components/UI/Buttons/XButton';
import { LoadingContainer } from 'components/UI/LoadingContainer';

const useStyles = makeStyles(({ palette: { blueLight } }) => ({
  container: {
    textAlign: 'center',
  },
  divider: {
    background: blueLight,
    marginBottom: '20px',
  },
}));

export const RegisterTemplate = ({ children, name, isOpened, handleClose }) => {
  const { container, divider } = useStyles();

  const { ...inputs } = useInputHandler();
  const { isInputs } = inputs;
  const { isToggle: isAccept, toggleHandler: toggleAccept } = useToggle();
  const { handlePass, ...errors } = useCheckFields(inputs, isOpened, isAccept);
  const { isErrors } = errors;
  const { ...toggle } = useToggle(false);
  const { loginHandler, registerHandler, resetHandler, isLoading, ...auth } = useAuth(
    isInputs,
    handlePass,
    handleClose,
  );

  const combinedFunc = (e) => {
    const { id } = e.target;
    handlePass();

    if (isErrors) return;
    if (id === 'register') return registerHandler();
    if (id === 'forgot') return resetHandler();

    return loginHandler();
  };
  const combinedObject = {
    ...inputs,
    ...errors,
    ...toggle,
    ...auth,
    combinedFunc,
    isOpened,
    isAccept,
    toggleAccept,
  };

  return (
    <div className={container}>
      <ModalHeader name={name} />
      <LoadingContainer loading={isLoading} />
      {children(combinedObject)}
      <Divider classes={{ root: divider }} />
      <SocialModal name={name} />
      <XButton handleClose={handleClose} />
    </div>
  );
};

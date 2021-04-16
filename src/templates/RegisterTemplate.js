import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { SocialModal } from 'components/layout/Modals/SocialModal';
import { ModalHeader } from 'components/layout/Modals/ModalHeader';
import { useInputHandler } from 'hooks/useInputHandler';
import { useCheckFields } from 'hooks/useCheckFields';
import { useToggle } from 'hooks/useToggle';

const useStyles = makeStyles(({ palette: { blueLight } }) => ({
  container: {
    textAlign: 'center',
  },
  divider: {
    background: blueLight,
  },
}));

export const RegisterTemplate = ({ children, name, isOpened }) => {
  const { container, divider } = useStyles();
  const { ...inputs } = useInputHandler();
  const { ...errors } = useCheckFields(inputs, isOpened);
  const { ...toggle } = useToggle(false);
  const dataObject = { ...inputs, ...errors, ...toggle };

  return (
    <div className={container}>
      <ModalHeader name={name} />
      {children(dataObject)}
      <div style={{ marginBottom: '20px' }}>
        <Divider classes={{ root: divider }} />
      </div>
      <SocialModal isOpened={isOpened} />
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { SocialModal } from 'components/layout/Modals/SocialModal';
import { ModalHeader } from 'components/layout/Modals/ModalHeader';

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

  return (
    <div className={container}>
      <ModalHeader name={name} />
      {children}
      <div style={{ marginBottom: '20px' }}>
        <Divider classes={{ root: divider }} />
      </div>
      <SocialModal isOpened={isOpened} />
    </div>
  );
};

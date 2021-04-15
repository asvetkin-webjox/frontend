import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'components/UI/Logo';
import { useOpenModal } from 'hooks/useOpenModal';
import { ID_REGISTER, ID_LOGIN } from 'config/config';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalsContainer } from 'components/layout/Modals/ModalsContainer';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '77px',
  },
  buttons: {
    display: 'flex',
  },
}));

export const Header = () => {
  const { container, buttons } = useStyles();
  const { modalHandler, ...rest } = useOpenModal();
  const { button, blueButton, blackButton, smallButton } = sharedStyles();

  return (
    <div className={container}>
      <Logo />
      <div className={buttons}>
        <div style={{ marginRight: '19px' }}>
          <CustomButton
            modalHandler={modalHandler}
            id={ID_LOGIN}
            name="Вход"
            styles={`${button} ${blackButton} ${smallButton}`}
          />
        </div>
        <CustomButton
          modalHandler={modalHandler}
          id={ID_REGISTER}
          name="Регистрация"
          styles={`${button} ${blueButton} ${smallButton}`}
        />
      </div>
      <ModalsContainer modalHandler={modalHandler} {...rest} />
    </div>
  );
};

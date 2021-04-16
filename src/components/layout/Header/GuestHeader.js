import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ID_REGISTER, ID_LOGIN } from 'config/config';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';
import { useMedia } from 'hooks/useMedia';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
}));

export const GuestHeader = ({ modalHandler }) => {
  const { container } = useStyles();
  const { button, blueButton, blackButton, smallButton, loginButton } = sharedStyles();
  const { matchesMobile } = useMedia();

  return (
    <div className={container}>
      <div style={{ marginRight: matchesMobile ? '0px' : '19px' }}>
        <CustomButton
          handler={modalHandler}
          id={ID_LOGIN}
          name="Вход"
          styles={`${button} ${blackButton} ${smallButton} ${loginButton}`}
        />
      </div>
      {!matchesMobile && (
        <CustomButton
          handler={modalHandler}
          id={ID_REGISTER}
          name="Регистрация"
          styles={`${button} ${blueButton} ${smallButton}`}
        />
      )}
    </div>
  );
};

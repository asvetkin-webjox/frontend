import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ID_REGISTER, ID_LOGIN } from 'config/config';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
}));

export const GuestHeader = ({ modalHandler }) => {
  const { container } = useStyles();
  const { button, blueButton, blackButton, smallButton } = sharedStyles();

  return (
    <div className={container}>
      <div style={{ marginRight: '19px' }}>
        <CustomButton
          handler={modalHandler}
          id={ID_LOGIN}
          name="Вход"
          styles={`${button} ${blackButton} ${smallButton}`}
        />
      </div>
      <CustomButton
        handler={modalHandler}
        id={ID_REGISTER}
        name="Регистрация"
        styles={`${button} ${blueButton} ${smallButton}`}
      />
    </div>
  );
};

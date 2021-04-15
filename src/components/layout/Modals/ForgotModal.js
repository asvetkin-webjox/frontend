import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';
import { RegisterTemplate } from 'templates/RegisterTemplate';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalButtons } from 'components/layout/Modals/ModalButtons';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { loginNames } from 'components/layout/Modals/loginNames';
import { RegisterInput } from 'components/UI/Input/RegisterInput';

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export const ForgotModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { container } = useStyles();
  const { button, blueButton, bigButton } = sharedStyles();
  const onlyEmail = loginNames.slice(0, 1);

  return (
    <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister}>
      <RegisterTemplate name="Восстановить пароль">
        <div className={container}>
          {onlyEmail.map(({ icon, placeholder, name }) => (
            <RegisterInput icon={icon} placeholder={placeholder} name={name} />
          ))}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <CustomButton name="Восстановить" styles={`${button} ${blueButton} ${bigButton}`} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <ModalButtons modalHandler={modalHandler} handleClose={handleClose} type="восстановить" />
        </div>
      </RegisterTemplate>
    </ModalContainer>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';
import { RegisterInput } from 'components/UI/Input/RegisterInput';
import { DoubleInput } from 'components/UI/Input/DoubleInput';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalButtons } from 'components/layout/Modals/ModalButtons';
import { AcceptTerms } from 'components/layout/Modals/AcceptTerms';
import { registerNames } from 'components/layout/Modals/registerNames';
import { RegisterTemplate } from 'templates/RegisterTemplate';

const useStyles = makeStyles(() => ({
  container: {},
}));

export const RegisterModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { container } = useStyles();
  const { button, blueButton, bigButton } = sharedStyles();

  return (
    <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister}>
      <RegisterTemplate name="Зарегистрироваться">
        <div className={container}>
          {registerNames.map((el, i) => {
            const { icon, placeholder, placeholders, name, names } = el;
            if (i === 1)
              return <DoubleInput icon={icon} placeholders={placeholders} names={names} />;

            return (
              <RegisterInput
                icon={icon}
                placeholder={placeholder}
                name={name}
                isDouble={i === 1 || i === 2}
              />
            );
          })}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <CustomButton name="Зарегистрироваться" styles={`${button} ${blueButton} ${bigButton}`} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <ModalButtons modalHandler={modalHandler} handleClose={handleClose} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <AcceptTerms />
        </div>
      </RegisterTemplate>
    </ModalContainer>
  );
};

import React, { Fragment } from 'react';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';
import { RegisterTemplate } from 'templates/RegisterTemplate';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalButtons } from 'components/layout/Modals/ModalButtons';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { loginNames } from 'components/layout/Modals/loginNames';
import { RegisterInput } from 'components/UI/Input/RegisterInput';

export const LoginModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { button, blueButton, bigButton } = sharedStyles();

  return (
    <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister}>
      <RegisterTemplate name="Войти в аккаунт" isOpened={isOpened}>
        {({ inputHandler, isErrors, handlePass, isPassed, isToggle, toggleHandler }) => (
          <Fragment>
            <div>
              {loginNames.map((el) => {
                const { icon, placeholder, name } = el;

                return (
                  <RegisterInput
                    icon={icon}
                    placeholder={placeholder}
                    name={name}
                    inputHandler={inputHandler}
                    isErrors={isErrors}
                    isPassed={isPassed}
                    isToggle={isToggle}
                    toggleHandler={toggleHandler}
                  />
                );
              })}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <CustomButton
                name="Войти"
                styles={`${button} ${blueButton} ${bigButton}`}
                handlePass={handlePass}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <ModalButtons modalHandler={modalHandler} handleClose={handleClose} type="войти" />
            </div>
          </Fragment>
        )}
      </RegisterTemplate>
    </ModalContainer>
  );
};

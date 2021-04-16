import React, { Fragment } from 'react';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';
import { RegisterInput } from 'components/UI/Input/RegisterInput';
import { DoubleInput } from 'components/UI/Input/DoubleInput';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalButtons } from 'components/layout/Modals/ModalButtons';
import { AcceptTerms } from 'components/layout/Modals/AcceptTerms';
import { registerNames } from 'components/layout/Modals/registerNames';
import { RegisterTemplate } from 'templates/RegisterTemplate';

export const RegisterModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { button, blueButton, bigButton } = sharedStyles();

  return (
    <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister}>
      <RegisterTemplate name="Зарегистрироваться">
        {({ handlePass, ...rest }) => (
          <Fragment>
            <div>
              {registerNames.map((el, i) => {
                const { icon, placeholder, placeholders, name, names } = el;
                if (i === 1)
                  return (
                    <DoubleInput
                      icon={icon}
                      placeholders={placeholders}
                      name={name}
                      names={names}
                      {...rest}
                    />
                  );

                return (
                  <RegisterInput
                    icon={icon}
                    placeholder={placeholder}
                    name={name}
                    isDouble={i === 1 || i === 2}
                    {...rest}
                  />
                );
              })}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <CustomButton
                name="Зарегистрироваться"
                styles={`${button} ${blueButton} ${bigButton}`}
                handlePass={handlePass}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <ModalButtons modalHandler={modalHandler} handleClose={handleClose} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <AcceptTerms {...rest} />
            </div>
          </Fragment>
        )}
      </RegisterTemplate>
    </ModalContainer>
  );
};

import React, { Fragment } from 'react';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';
import { ModalButtons } from 'components/layout/Modals/ModalButtons';
import { AcceptTerms } from 'components/layout/Modals/AcceptTerms';
import { RegisterTemplate } from 'templates/RegisterTemplate';
import { useToggle } from 'hooks/useToggle';
import ClickAwayListener from 'react-click-away-listener';
import { RegisterContent } from 'components/layout/Modals/RegisterModal/RegisterContent';
import { useMedia } from 'hooks/useMedia';
import { Error } from 'components/UI/Error';

export const RegisterModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { button, blueButton, bigButton } = sharedStyles();
  const { toggleOff: close, toggleOn: open, isToggle: isOpen, ...toggle } = useToggle(false);
  const closePop = (e) => {
    const blankFunc = () => null;
    const { id } = e.target;
    if (id !== 'Тип аккаунта') return close();

    return blankFunc();
  };

  const { matchesMobile } = useMedia();

  return (
    <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister} isToggle={isOpen}>
      <RegisterTemplate name="Зарегистрироваться" handleClose={handleClose}>
        {({ combinedFunc, isAuthError, ...rest }) => (
          <Fragment>
            {/* {!isRegistered && ( */}
            <div style={{ position: 'relative' }}>
              <ClickAwayListener onClickAway={closePop}>
                <RegisterContent {...toggle} {...rest} open={open} isOpen={isOpen} />
              </ClickAwayListener>
              {isAuthError && <Error name="Регистрация не удалась" />}
            </div>
            {/* )} */}
            {/* {isRegistered && !isErrors && (
              <div style={{ margin: '24px 0', fontSize: '20px' }}>Успешная регистрация</div>
            )} */}
            <div style={{ marginBottom: '20px' }}>
              <CustomButton
                name="Зарегистрироваться"
                styles={`${button} ${blueButton} ${bigButton}`}
                handler={combinedFunc}
                id="register"
              />
            </div>
            <div style={{ marginBottom: matchesMobile ? '20px' : '40px' }}>
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

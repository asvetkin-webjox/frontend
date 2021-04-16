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

export const RegisterModal = ({ handleClose, isOpened, idRegister, modalHandler }) => {
  const { button, blueButton, bigButton } = sharedStyles();
  const { isToggle: isAccept, toggleHandler: toggleAccept } = useToggle();
  const { toggleOff, ...toggle } = useToggle(false);

  return (
    <ClickAwayListener onClickAway={toggleOff}>
      <ModalContainer handleClose={handleClose} isOpened={isOpened} id={idRegister} {...toggle}>
        <RegisterTemplate name="Зарегистрироваться">
          {({ combinedFunc, toggleHandler, ...rest }) => (
            <Fragment>
              <RegisterContent {...rest} {...toggle} />
              <div style={{ marginBottom: '20px' }}>
                <CustomButton
                  name="Зарегистрироваться"
                  styles={`${button} ${blueButton} ${bigButton}`}
                  handler={combinedFunc}
                />
              </div>
              <div style={{ marginBottom: '40px' }}>
                <ModalButtons modalHandler={modalHandler} handleClose={handleClose} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <AcceptTerms {...rest} isToggle={isAccept} toggleHandler={toggleAccept} />
              </div>
            </Fragment>
          )}
        </RegisterTemplate>
      </ModalContainer>
    </ClickAwayListener>
  );
};

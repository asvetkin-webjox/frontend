import React, { Fragment } from 'react';
import { ID_REGISTER, ID_LOGIN, ID_FORGOT } from 'config/config';
import { RegisterModal } from 'components/layout/Modals/RegisterModal';
import { LoginModal } from 'components/layout/Modals/LoginModal';
import { ForgotModal } from 'components/layout/Modals/ForgotModal';
import { sharedStyles } from 'lib/sharedStyles';

export const ModalsContainer = ({ isOpened, handleClose, modalHandler }) => {
  const { button } = sharedStyles();

  return (
    <Fragment>
      <RegisterModal
        isOpened={isOpened}
        handleClose={handleClose}
        idRegister={ID_REGISTER}
        styles={button}
        modalHandler={modalHandler}
      />
      <LoginModal
        isOpened={isOpened}
        handleClose={handleClose}
        idRegister={ID_LOGIN}
        styles={button}
        modalHandler={modalHandler}
      />
      {/* <ForgotModal
        isOpened={isOpened}
        handleClose={handleClose}
        idRegister={ID_FORGOT}
        styles={button}
        modalHandler={modalHandler}
      /> */}
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { ID_REGISTER, ID_LOGIN, ID_FORGOT } from 'config/config';
import { RegisterModal } from 'components/layout/Modals/RegisterModal';
import { LoginModal } from 'components/layout/Modals/LoginModal';
import { ForgotModal } from 'components/layout/Modals/ForgotModal';
import { sharedStyles } from 'lib/sharedStyles';

export const ModalsContainer = (props) => {
  const { button } = sharedStyles();

  return (
    <Fragment>
      <RegisterModal idRegister={ID_REGISTER} styles={button} {...props} />
      <LoginModal idRegister={ID_LOGIN} styles={button} {...props} />
      <ForgotModal idRegister={ID_FORGOT} styles={button} {...props} />
    </Fragment>
  );
};

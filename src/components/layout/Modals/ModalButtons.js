import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ID_REGISTER, ID_LOGIN, ID_FORGOT } from 'config/config';
import { ModalButton } from 'components/layout/Modals/ModalButton';

const useStyles = makeStyles(({ palette: { green, blueLight } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  enter: {
    color: green,
    borderBottom: `1px dashed ${green}`,
  },
  forgot: {
    color: blueLight,
    borderBottom: `1px dashed ${blueLight}`,
  },
}));

export const ModalButtons = ({ modalHandler, handleClose, type }) => {
  const { container, enter, forgot } = useStyles();
  const twoFunc = (e) => [handleClose(), modalHandler(e)];
  const id = type ? ID_REGISTER : ID_LOGIN;
  const name = type ? 'Зарегистрировать аккаунт' : 'Войти в аккаунт';

  return (
    <div className={container}>
      <ModalButton name={name} id={id} twoFunc={twoFunc} style={enter} />
      {type === 'восстановить' ? (
        <ModalButton name="Войти в аккаунт" id={ID_LOGIN} twoFunc={twoFunc} style={forgot} />
      ) : (
        <ModalButton name="Забыли пароль?" id={ID_FORGOT} twoFunc={twoFunc} style={forgot} />
      )}
    </div>
  );
};

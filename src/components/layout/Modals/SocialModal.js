import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'left',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    cursor: 'pointer',
  },
}));

export const SocialModal = ({ name }) => {
  const { container, iconsContainer } = useStyles();
  const text = () => {
    if (name === 'Войти в аккаунт') return 'Войти';

    return 'Зарегистрироваться';
  };

  return (
    <div className={container}>
      <div style={{ marginBottom: '16px' }}>{`${text()} используя аккаунт в соцсетях`}</div>
      <div className={iconsContainer}>
        <img src="/icons/google.svg" />
        <img src="/icons/yandex.svg" />
        <img src="/icons/facebook.svg" />
        <img src="/icons/vk.svg" />
        <img src="/icons/apple.svg" />
      </div>
    </div>
  );
};

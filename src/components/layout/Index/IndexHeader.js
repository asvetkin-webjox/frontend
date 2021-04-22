import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginBottom: '36px',
  },
  h1: {
    padding: '50px 0 32px 0',
  },
  h2: {
    margin: '0 auto',
    maxWidth: '370px',
    fontWeight: '300',
  },
}));

export const IndexHeader = ({}) => {
  const { container, h1, h2 } = useStyles();

  return (
    <div className={container}>
      <Typography variant="h1" className={h1}>
        Поиск прибыльных ниш для бизнеса
      </Typography>
      <Typography variant="h2" className={h2}>
        Лучший способ найти прибыльную нишу для бизнеса в своем регионе
      </Typography>
    </div>
  );
};

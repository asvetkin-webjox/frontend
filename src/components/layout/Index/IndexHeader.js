import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    textAlign: 'center',
    marginBottom: '87px',
    [breakpoints.between('md', 'lg')]: {
      marginBottom: '36px',
    },
    [breakpoints.between('sm', 'md')]: {
      marginBottom: '104px',
    },
    [breakpoints.down('sm')]: {
      marginBottom: '48px',
    },
  },
  h1: {
    padding: '191px 0 30px 0',
    [breakpoints.between('md', 'lg')]: {
      padding: '50px 0 32px 0',
    },
    [breakpoints.between('sm', 'md')]: {
      padding: '197px 0 32px 0',
    },
    [breakpoints.down('sm')]: {
      maxWidth: '197px',
      padding: '66px 0 42px 0',
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
  },
  h2: {
    margin: '0 auto',
    maxWidth: '592px',
    fontWeight: '300',
    [breakpoints.down('lg')]: {
      maxWidth: '370px',
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
    [breakpoints.down('sm')]: {
      maxWidth: '222px',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
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

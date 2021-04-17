import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpTrend } from 'components/UI/Icons/UpTrend';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    [breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  image: {
    marginRight: '8px',
    [breakpoints.down('md')]: {
      marginRight: '2px',
    },
    [breakpoints.down('sm')]: {
      marginRight: '8px',
    },
  },
}));

export const TableGrowth = ({ growth }) => {
  const { container, ...classes } = useStyles();
  const growthPercentage = `${parseFloat((growth * 100).toString().slice(0, 4))} %`;

  const checkGrowth = (() => {
    if (growth < 0) return [<UpTrend up={false} {...classes} />, growthPercentage];
    if (growth > 0) return [<UpTrend up {...classes} />, `+${growthPercentage}`];

    return '-';
  })();

  return <div className={container}>{checkGrowth}</div>;
};

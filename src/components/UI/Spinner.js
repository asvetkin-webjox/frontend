import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: 'calc(50% - 32px)',
    left: 'calc(50% - 32px)',
    width: 64,
    height: 64,
    borderRadius: '50%',
    perspective: 800,
  },
  inner: {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  '@keyframes rotateOne': {
    '0%': {
      transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)',
    },
  },
  '@keyframes rotateTwo': {
    '0%': {
      transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)',
    },
  },
  '@keyframes rotateThree': {
    '0%': {
      transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)',
    },
  },
  innerOne: {
    left: '0%',
    top: '0%',
    animation: '$rotateOne 1s linear infinite',
    borderBottom: '3px solid #EFEFFA',
  },
  innerTwo: {
    right: '0%',
    top: '0%',
    animation: '$rotateTwo 1s linear infinite',
    borderRight: '3px solid #EFEFFA',
  },
  innerThree: {
    right: '0%',
    bottom: '0%',
    animation: '$rotateThree 1s linear infinite',
    borderTop: '3px solid #EFEFFA',
  },
}));

export const Spinner = ({}) => {
  const { container, inner, innerOne, innerTwo, innerThree } = useStyles();

  return (
    <div className={container}>
      <div className={`${inner} ${innerOne}`} />
      <div className={`${inner} ${innerTwo}`} />
      <div className={`${inner} ${innerThree}`} />
    </div>
  );
};

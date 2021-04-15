import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useToggle } from 'hooks/useToggle';
import { sharedStyles } from 'lib/sharedStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    textAlign: 'left',
  },
  image: {
    marginRight: '9px',
    cursor: 'pointer',
  },
}));

export const AcceptTerms = ({}) => {
  const { container, image } = useStyles();
  const { isToggle, toggleHandler } = useToggle();
  const choiceImage = isToggle ? 'ovalFilled.svg' : 'oval.svg';
  const { link } = sharedStyles();

  return (
    <div className={container}>
      <img src={`/icons/${choiceImage}`} className={image} onClick={toggleHandler} />
      <div>
        <span>Соглашаюсь на </span>
        <span className={link}>обработку персональных данных</span>
        <span> и</span>
        <span className={link}> использования cookie-файлов.</span>
      </div>
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sharedStyles } from 'lib/sharedStyles';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    textAlign: 'left',
  },
  image: {
    marginRight: '9px',
    cursor: 'pointer',
  },
}));

export const AcceptTerms = ({ isPassed, isErrors, isToggle, toggleHandler }) => {
  const { container, image } = useStyles();
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
      {!isPassed && !isToggle && <ErrorMessage name="terms" message={isErrors} />}
    </div>
  );
};

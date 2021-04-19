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

export const AcceptTerms = ({ isPassed, isErrors, isAccept, toggleAccept }) => {
  const { container, image } = useStyles();
  const choiceImage = isAccept ? 'ovalFilled.svg' : 'oval.svg';
  const { link } = sharedStyles();

  return (
    <div className={container}>
      <img src={`/icons/${choiceImage}`} className={image} onClick={toggleAccept} />
      <div>
        <span>Соглашаюсь на </span>
        <span className={link}>обработку персональных данных</span>
        <span> и</span>
        <span className={link}> использования cookie-файлов.</span>
      </div>
      {!isPassed && !isAccept && <ErrorMessage name="terms" message={isErrors} />}
    </div>
  );
};

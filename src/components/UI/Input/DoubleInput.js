import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { inputLeftStyle } from 'components/UI/Input/inputLeftStyle';
import { inputRightStyle } from 'components/UI/Input/inputRightStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';
import { useMedia } from 'hooks/useMedia';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    marginBottom: '20px',
    [breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
  input: {
    position: 'relative',
    width: '50%',
  },
}));

export const DoubleInput = ({ placeholders, names, icon, isErrors, isPassed, inputHandler }) => {
  const { container, input } = useStyles();
  const [fisrtName, secondName] = names;
  const [firstPh, secondPh] = placeholders;
  const { matchesMobile } = useMedia();
  const calcWidth = matchesMobile ? '100%' : '161px';

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <div className={input}>
        <Input
          placeholder={firstPh}
          width={calcWidth}
          isAdornment
          inputHandler={inputHandler(fisrtName)}
          styles={inputLeftStyle}
        />
        {!isPassed && fisrtName && <ErrorMessage name={fisrtName} message={isErrors} />}
      </div>
      <div className={input}>
        <Input
          placeholder={secondPh}
          width={calcWidth}
          isAdornment={false}
          inputHandler={inputHandler(secondName)}
          styles={inputRightStyle}
        />
        {!isPassed && secondName && <ErrorMessage name={secondName} message={isErrors} />}
      </div>
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { inputLeftStyle } from 'components/UI/Input/inputLeftStyle';
import { inputRightStyle } from 'components/UI/Input/inputRightStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    position: 'relative',
    marginBottom: '20px',
  },
  input: {
    position: 'relative',
  },
}));

export const DoubleInput = ({ placeholders, names, icon, isErrors, isPassed, inputHandler }) => {
  const { container, input } = useStyles();
  const [fisrtName, secondName] = names;
  const [firstPh, secondPh] = placeholders;

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <div className={input}>
        <Input
          placeholder={firstPh}
          width="161px"
          isAdornment
          inputHandler={inputHandler(fisrtName)}
          styles={inputLeftStyle}
        />
        {!isPassed && fisrtName && <ErrorMessage name={fisrtName} message={isErrors} />}
      </div>
      <div className={input}>
        <Input
          placeholder={secondPh}
          width="161px"
          isAdornment={false}
          inputHandler={inputHandler(secondName)}
          styles={inputRightStyle}
        />
        {!isPassed && secondName && <ErrorMessage name={secondName} message={isErrors} />}
      </div>
    </div>
  );
};

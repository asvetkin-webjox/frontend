import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { inputLeftStyle } from 'components/UI/Input/inputLeftStyle';
import { inputRightStyle } from 'components/UI/Input/inputRightStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { useInputHandler } from 'hooks/useInputHandler';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    position: 'relative',
    marginBottom: '20px',
  },
}));

export const DoubleInput = ({ placeholders, name, names, icon, isErrors, isPassed }) => {
  console.log('DoubleInput -> name', name);
  const { container } = useStyles();
  const [fisrtName, secondName] = names;
  const [firstPh, secondPh] = placeholders;
  const { inputHandler } = useInputHandler();
  const arrNames = ['name', 'surname'];

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <Input
        placeholder={firstPh}
        width="161px"
        isAdornment
        inputHandler={inputHandler(fisrtName)}
        styles={inputLeftStyle}
      />
      <Input
        placeholder={secondPh}
        width="161px"
        isAdornment={false}
        inputHandler={inputHandler(secondName)}
        styles={inputRightStyle}
      />
      {arrNames.map(
        (el) => !isPassed && name === el && <ErrorMessage name={el} message={isErrors} />,
      )}
    </div>
  );
};

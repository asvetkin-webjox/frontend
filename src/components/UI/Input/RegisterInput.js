import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';
import { phoneMask } from 'utils/phoneMask';
import { ShowPassword } from 'components/UI/Buttons/ShowPassword';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    marginBottom: '20px',
  },
}));

export const RegisterInput = ({
  icon,
  placeholder,
  name,
  inputHandler,
  isErrors,
  isPassed,
  togglePassword,
  toggleHandler,
}) => {
  const ifPassword = name === 'repeat' || name === 'password';
  const arrNames = ['password', 'mail', 'phone', 'repeat'];

  const { container } = useStyles();
  const showPassword = () => {
    if (togglePassword) return 'text';
    if (ifPassword) return 'password';

    return 'text';
  };

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <Input
        placeholder={placeholder}
        width="100%"
        required
        isAdornment
        inputHandler={inputHandler(name)}
        textMask={name === 'phone' ? phoneMask : undefined}
        type={showPassword()}
      />
      {ifPassword && <ShowPassword toggleHandler={toggleHandler} />}

      {arrNames.map(
        (el) => !isPassed && name === el && <ErrorMessage name={el} message={isErrors} />,
      )}
    </div>
  );
};

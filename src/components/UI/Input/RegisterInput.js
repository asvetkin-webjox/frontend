import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';
import { phoneMask } from 'utils/phoneMask';
import { ShowPassword } from 'components/UI/Buttons/ShowPassword';
import { useToggle } from 'hooks/useToggle';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    position: 'relative',
    marginBottom: '20px',
    [breakpoints.down('sm')]: {
      marginBottom: ({ blockName }) => (blockName === 'register' ? '16px' : '20px'),
    },
  },
}));

export const RegisterInput = ({
  icon,
  placeholder,
  name,
  inputHandler,
  isErrors,
  isPassed,
  blockName,
}) => {
  const { isToggle, toggleHandler } = useToggle();
  const ifPassword = name === 'repeat' || name === 'password';
  const arrNames = ['password', 'mail', 'phone', 'repeat'];
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const { userAgent } = window.navigator;
  const isSafari = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);

  const { container } = useStyles({ blockName });
  const showPassword = () => {
    if (isToggle) return 'text';
    if (ifPassword) return 'password';

    return 'text';
  };

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      {isSafari && (
        <form noValidate>
          <Input
            placeholder={placeholder}
            width="100%"
            required
            isAdornment
            inputHandler={inputHandler(name)}
            textMask={name === 'phone' ? phoneMask : undefined}
            type={showPassword()}
          />
        </form>
      )}
      {!isSafari && (
        <Input
          placeholder={placeholder}
          width="100%"
          required
          isAdornment
          inputHandler={inputHandler(name)}
          textMask={name === 'phone' ? phoneMask : undefined}
          type={showPassword()}
        />
      )}

      {ifPassword && <ShowPassword toggleHandler={toggleHandler} />}

      {arrNames.map(
        (el) => !isPassed && name === el && <ErrorMessage name={el} message={isErrors} />,
      )}
    </div>
  );
};

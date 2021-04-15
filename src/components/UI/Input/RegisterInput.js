import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { useInputHandler } from 'hooks/useInputHandler';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    marginBottom: '20px',
  },
}));

export const RegisterInput = ({ icon, placeholder, name }) => {
  const { container } = useStyles();
  const { inputHandler } = useInputHandler();

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <Input placeholder={placeholder} width="100%" isAdornment inputHandler={inputHandler(name)} />
    </div>
  );
};

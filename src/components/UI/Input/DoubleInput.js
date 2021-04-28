import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { inputLeftStyle } from 'components/UI/Input/inputLeftStyle';
import { inputRightStyle } from 'components/UI/Input/inputRightStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { ErrorMessage } from 'components/UI/Input/ErrorMessage';
import { useMedia } from 'hooks/useMedia';
import { useInputHandler } from 'hooks/useInputHandler';

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
  // const [fio, setFio] = useState('');
  const regex = /[^a-zA-Zа-яА-Я]/g;
  const { isInputs: fio, inputHandler: fioHandler } = useInputHandler(true, regex);
  const { name = '', surname = '' } = fio;

  // const fioHandler = (e) => setFio(e.target.value);
  // const check = isInputs.name && !!isInputs.name.match(regex);

  // useEffect(() => {
  //   setFio({ name: name.replace(regex, ''), surname: surname.replace(regex, '') });
  // }, [name, surname]);

  return (
    <div className={container}>
      <InputIcon url={`icons/${icon}`} />
      <div className={input}>
        <Input
          placeholder={firstPh}
          value={name}
          width={calcWidth}
          isAdornment
          inputHandler={fioHandler('name')}
          onBlur={inputHandler(fisrtName)}
          styles={inputLeftStyle}
        />
        {!isPassed && fisrtName && <ErrorMessage name={fisrtName} message={isErrors} />}
      </div>
      <div className={input}>
        <Input
          placeholder={secondPh}
          value={surname}
          width={calcWidth}
          isAdornment={false}
          inputHandler={fioHandler('surname')}
          onBlur={inputHandler(secondName)}
          styles={inputRightStyle}
        />
        {!isPassed && secondName && <ErrorMessage name={secondName} message={isErrors} />}
      </div>
    </div>
  );
};

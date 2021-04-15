import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { useHidePholder } from 'hooks/useHidePholder';
import { InputStyle } from 'components/UI/Input/InputStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
}));

export const Search = ({ searchHandler }) => {
  const { container } = useStyles();
  const { isClicked, clickHandler } = useHidePholder('Поиск по нишам');

  return (
    <div onFocus={clickHandler} onBlur={clickHandler} className={container}>
      <InputIcon url="icons/search.svg" />
      <Input
        placeholder={isClicked}
        width="100%"
        isAdornment
        styles={InputStyle}
        searchHandler={searchHandler}
      />
    </div>
  );
};

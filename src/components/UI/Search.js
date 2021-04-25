import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { useHidePholder } from 'hooks/useHidePholder';
import { InputStyle } from 'components/UI/Input/InputStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { SearchContext } from 'state/context/search-context';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
}));

export const Search = ({ searchHandler, searchBtnHandler }) => {
  const { container } = useStyles();
  const { isClicked, clickHandler } = useHidePholder('Поиск по нишам');
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      searchBtnHandler();
    }
  };
  const {
    searchCtxState: { isCtxSearch },
  } = useContext(SearchContext);

  return (
    <div onFocus={clickHandler} onBlur={clickHandler} className={container}>
      <InputIcon url="icons/search.svg" />
      <Input
        defaultV={isCtxSearch || ''}
        placeholder={isClicked}
        width="100%"
        isAdornment
        styles={InputStyle}
        inputHandler={searchHandler}
        onKeyUp={keyHandler}
      />
    </div>
  );
};

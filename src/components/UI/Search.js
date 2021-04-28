import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input/Input';
import { useHidePholder } from 'hooks/useHidePholder';
import { InputStyle } from 'components/UI/Input/InputStyle';
import { inputIndexStyle } from 'components/UI/Input/inputIndexStyle';
import { InputIcon } from 'components/UI/Input/InputIcon';
import { SearchContext } from 'state/context/search-context';
import { useMedia } from 'hooks/useMedia';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
}));

export const Search = ({ searchHandler, searchDelContext, searchBtnHandler, isIndex }) => {
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
  const { matchesMobile } = useMedia();
  const checkIfIcon = isIndex && matchesMobile;
  const mergeFunc = (e) => [searchHandler(e), searchDelContext()];

  // dont show icon on index and mobile

  return (
    <div onFocus={clickHandler} onBlur={clickHandler} className={container}>
      {!checkIfIcon && <InputIcon url="icons/search.svg" />}
      <Input
        defaultV={isCtxSearch || ''}
        placeholder={isClicked}
        width="100%"
        isAdornment={!checkIfIcon}
        styles={InputStyle}
        inputHandler={mergeFunc}
        onKeyUp={keyHandler}
        styles={matchesMobile && isIndex ? inputIndexStyle : InputStyle}
      />
    </div>
  );
};

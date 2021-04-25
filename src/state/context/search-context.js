import React, { useReducer, createContext } from 'react';
import { searchReducer } from 'state/reducers/searchReducer';
import { SET_SEARCH, CLEAR_SEARCH } from 'state/constants';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchCtxState, dispatch] = useReducer(searchReducer, {
    isCtxSearch: false,
  });

  const searchContext = (text) => dispatch({ type: SET_SEARCH, text });
  const searchDelContext = () => dispatch({ type: CLEAR_SEARCH });

  return (
    <SearchContext.Provider
      value={{
        searchCtxState,
        searchContext,
        searchDelContext,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;

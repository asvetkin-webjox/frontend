import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'components/layout/Header/Header';
import { SearchInputs } from 'components/layout/SearchInputs/SearchInputs';
import { ToggleContext } from 'state/context/toggle-context';
import { useFetchData } from 'hooks/useFetchData';
import { IndexHeader } from 'components/layout/Index/IndexHeader';
import { NoSsr } from '@material-ui/core';
import { IndexAnnotation } from 'components/layout/Index/IndexAnnotation';

const useStyles = makeStyles(({ breakpoints }) => ({
  wholeContainer: {
    position: 'relative',
    height: '100%',
    overflow: ({ dimmed }) => (dimmed ? 'hidden' : 'visible'),
    '&:after': {
      zIndex: '0',
      content: '""',
      position: 'absolute',
      margin: '0 auto',
      opacity: ({ dimmed }) => (dimmed ? '0.4' : '1'),
      width: ({ dimmed }) => (dimmed ? '100vw' : '0%'),
      height: '100vh',
      left: '0',
      top: '0',
      backgroundColor: '#000',
    },
  },
  container: {
    width: '949px',
    height: '100%',
    margin: '0 auto',
    [breakpoints.down('md')]: {
      maxWidth: '704px',
    },
    [breakpoints.down('sm')]: {
      width: 'auto',
      padding: '0 29px',
    },
  },
}));

export const Template = ({ children, tableHandler, isIndex = false }) => {
  const {
    toggleState: { dimmed },
    resetHandler,
  } = useContext(ToggleContext);
  const { wholeContainer, container } = useStyles({ dimmed });
  const { isData, isLoading, ...rest } = useFetchData(isIndex);
  const combinedObject = {
    isLoading,
    ...rest,
  };

  const { data = [], regions } = isData;
  const [items, pages] = data;
  const dataObject = { items, pages, isIndex, tableHandler, ...combinedObject };
  // const isAuth;
  const conditionCheck = (...conditions) => {
    return conditions.map((c) => {
      if (!c) return null;

      return true;
    });
  };

  // const cond = [];
  // const isShow = conditionCheck(!isAuth, isIndex, matchesHD)
  // const isMenu = (() => {
  //   if (!isAuth) return null;
  //   if (isIndex) return null;
  //   if (!matchesHD) return null;

  //   return true;
  // })();

  return (
    <NoSsr>
      <div className={wholeContainer} onClick={resetHandler}>
        <div className={container}>
          <div style={{ marginBottom: '12px' }}>
            <Header />
          </div>
          {isIndex && <IndexHeader />}
          <div style={{ marginBottom: '40px' }}>
            <SearchInputs regions={regions} {...dataObject} />
          </div>
          {isIndex && <IndexAnnotation />}
          {children(dataObject)}
        </div>
      </div>
    </NoSsr>
  );
};

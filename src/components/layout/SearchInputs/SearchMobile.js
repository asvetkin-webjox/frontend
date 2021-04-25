import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from 'components/UI/Search';
import { Filter } from 'components/UI/Filter';
import { IndexMobile } from 'components/layout/Index/IndexMobile';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  filter: {
    zIndex: 1,
  },
}));

export const SearchMobile = ({ isIndex, ...rest }) => {
  const { container, filter } = useStyles();

  return (
    <div className={container}>
      {isIndex ? (
        <IndexMobile isIndex={isIndex} {...rest} />
      ) : (
        <Fragment>
          <Search {...rest} />
          <div className={filter}>
            <Filter {...rest} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

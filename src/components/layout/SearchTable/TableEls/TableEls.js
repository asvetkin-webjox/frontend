import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableEl } from 'components/layout/SearchTable/TableEls/TableEl';
import { NothingFound } from 'components/layout/SearchTable/TableEls/NothingFound';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'block',
  },
}));

export const TableEls = ({ sizes, data = [], isPage, isLoading }) => {
  const { container } = useStyles();
  const arrLength = data.length;

  const checkIfBlank = (() => {
    if (!isLoading && data.length === 0) return <NothingFound />;

    return data.map((el, i) => (
      <TableEl
        data={el}
        index={i}
        sizes={sizes}
        key={`${i}table`}
        isPage={isPage}
        arrLength={arrLength}
      />
    ));
  })();

  return <div className={container}>{checkIfBlank}</div>;
};

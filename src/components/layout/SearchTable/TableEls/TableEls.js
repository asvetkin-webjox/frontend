import React from 'react';
import { TableEl } from 'components/layout/SearchTable/TableEls/TableEl';
import { NothingFound } from 'components/layout/SearchTable/TableEls/NothingFound';

export const TableEls = ({ data, isLoading, isIndex, ...rest }) => {
  const arrLength = data && data.length;

  const checkIfBlank = (() => {
    if (!isLoading && arrLength === 0) return <NothingFound />;

    return (
      data &&
      data.map((el, i) => (
        <TableEl
          data={el}
          index={i}
          key={`${i}table`}
          arrLength={arrLength}
          isIndex={isIndex}
          {...rest}
        />
      ))
    );
  })();

  return <div>{checkIfBlank}</div>;
};

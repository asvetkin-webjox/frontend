import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { useMedia } from 'hooks/useMedia';

export const Index = ({ tableHandler }) => {
  const { matchesMobile } = useMedia();

  const search = (props) => {
    return matchesMobile ? '' : <SearchTable {...props} />;
  };

  return (
    <Template tableHandler={tableHandler} isIndex>
      {(props) => search(props)}
    </Template>
  );
};

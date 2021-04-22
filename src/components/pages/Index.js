import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { useMedia } from 'hooks/useMedia';
import { SearchTableMobile } from 'components/layout/SearchTable/SearchTableMobile';

export const Index = ({}) => {
  const { matchesMobile } = useMedia();

  const search = (props) => {
    return matchesMobile ? <SearchTableMobile {...props} /> : <SearchTable {...props} />;
  };

  return <Template isIndex>{(props) => search(props)}</Template>;
};
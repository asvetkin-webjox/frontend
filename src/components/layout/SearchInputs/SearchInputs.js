import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { SearchMobile } from 'components/layout/SearchInputs/SearchMobile';
import { SearchDesktop } from 'components/layout/SearchInputs/SearchDesktop';
import { useMedia } from 'hooks/useMedia';
import { SideMenuOpenButton } from '../SideMenu/SideMenuOpenButton';

export const SearchInputs = ({ isIndex, ...rest }) => {
  const { matchesMobile } = useMedia();

  return (
    <Fragment>
      {!isIndex && (
        <Typography variant="h3" component="h3" style={{ marginBottom: '16px' }}>
          <SideMenuOpenButton />
          База ниш
        </Typography>
      )}
      {matchesMobile ? (
        <SearchMobile {...rest} isIndex={isIndex} />
      ) : (
        <SearchDesktop {...rest} isIndex={isIndex} />
      )}
    </Fragment>
  );
};

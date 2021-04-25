import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { SearchMobile } from 'components/layout/SearchInputs/SearchMobile';
import { SearchDesktop } from 'components/layout/SearchInputs/SearchDesktop';
import { useMedia } from 'hooks/useMedia';
import { SideMenuOpenButton } from '../SideMenu/SideMenuOpenButton';

export const SearchInputs = (props) => {
  const { matchesMobile } = useMedia();

  return (
    <Fragment>
      <Typography variant="h2" component="h2" style={{ marginBottom: '16px' }}>
        <SideMenuOpenButton />
        База ниш
      </Typography>
      {matchesMobile ? <SearchMobile {...props} /> : <SearchDesktop {...props} />}
    </Fragment>
  );
};

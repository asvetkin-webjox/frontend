import { Fragment, useContext } from 'react';
import { NoSsr } from '@material-ui/core';

import { AuthContext } from 'state/context/auth-context';
/* import { useMedia } from 'hooks/useMedia'; */
import { SideMenu } from './SideMenu';
/* import { SideMenuHD } from './SideMenuHD'; */

const SideMenuContainer = () => {
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  /* const { matchesHD } = useMedia(); */

  /* const sideMenu = matchesHD ? <SideMenuHD /> : <SideMenu />; */
  const sideMenu = <SideMenu />;

  return (
    <Fragment>
      <NoSsr>{isAuth ? sideMenu : null}</NoSsr>
    </Fragment>
  );
};

export default SideMenuContainer;

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'components/UI/Logo';
import { GuestHeader } from 'components/layout/Header/GuestHeader';
import { AuthContext } from 'state/context/auth-context';
import { NoSsr } from '@material-ui/core';
import { UserHeader } from 'components/layout/Header/UserHeader';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '77px',
  },
}));

export const Header = ({ modalHook }) => {
  const { container } = useStyles();
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  return (
    <div className={container}>
      <NoSsr>
        <Logo />
        {isAuth ? <UserHeader /> : <GuestHeader {...modalHook} />}
      </NoSsr>
    </div>
  );
};

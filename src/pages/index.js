import React, { useContext } from 'react';
import { Table } from 'components/pages/Table';
import { AuthContext } from 'state/context/auth-context';
import { Index } from 'components/pages/Index';

const index = () => {
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  return isAuth ? <Table /> : <Index />;
};

export default index;

import React from 'react';
import { Table } from 'components/pages/Table';
import { Index } from 'components/pages/Index';
import { useToggle } from 'hooks/useToggle';

const index = () => {
  const { isToggle: isTable, toggleHandler: tableHandler } = useToggle();
  console.log('index -> tableHandler', tableHandler);

  return isTable ? <Table tableHandler={tableHandler} /> : <Index tableHandler={tableHandler} />;
};

export default index;

// save search value to state
// if there is search value in state
// use it and clear state value

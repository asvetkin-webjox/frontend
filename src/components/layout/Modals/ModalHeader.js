import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
}));

export const ModalHeader = ({ name }) => {
  const { container } = useStyles();

  return (
    <Typography variant="h2" color="initial" style={{ margin: '10px 0 32px 0' }}>
      {name}
    </Typography>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    position: 'relative',
    padding: '6px 0px 6px 16px',
    maxWidth: '100%',
    backgroundColor: ({ isToggle }) => isToggle && primary.hover,
    '&:hover': {
      transition: '0.3s',
      borderRadius: '4px',
      backgroundColor: primary.hover,
    },
  },
}));

export const DropElTemplate = ({ name, id, isToggle, selectHandler }) => {
  const { container } = useStyles({ isToggle });

  return (
    <div className={container} id={id} onClick={selectHandler}>
      {name}
    </div>
  );
};

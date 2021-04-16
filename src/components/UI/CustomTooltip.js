import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(({ palette: { primary, secondary }, shadow }) => ({
  arrow: {
    color: primary.dim,
  },
  tooltip: {
    backgroundColor: primary.dim,
    color: secondary.main,
    boxShadow: shadow.primary,
    fontSize: '12px',
    padding: '4px 16px',
  },
}));

export const CustomTooltip = ({ title = '', ...rest }) => {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} title={title} {...rest} />;
};

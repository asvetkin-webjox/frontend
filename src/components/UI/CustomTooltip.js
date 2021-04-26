import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(({ breakpoints, palette: { primary, secondary }, shadow }) => ({
  arrow: {
    color: primary.dim,
  },
  tooltip: {
    backgroundColor: primary.dim,
    color: secondary.main,
    boxShadow: shadow.primary,
    fontSize: '12px',
    padding: '4px 16px',
    [breakpoints.down('sm')]: {
      maxWidth: '190px',
    },
  },
}));

export const CustomTooltip = ({ title = '', mobile, ...rest }) => {
  const classes = useStyles();
  const placementPosition = mobile ? 'right' : 'bottom';

  return (
    <Tooltip
      arrow={!mobile}
      classes={classes}
      title={title}
      placement={placementPosition}
      {...rest}
    />
  );
};

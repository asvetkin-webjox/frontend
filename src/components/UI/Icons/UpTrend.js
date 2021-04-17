import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { accent, green } }) => ({
  svg: {
    display: 'flex',
    fill: ({ up }) => (up ? green : accent),
    transform: ({ up }) => (up ? 'rotate(0deg)' : 'scaleX(-1) rotate(180deg)'),
  },
}));

export const UpTrend = ({ up, image }) => {
  const { svg } = useStyles({ up });

  return (
    <svg height="8" viewBox="0 0 12 8" width="12" className={`${svg} ${image}`}>
      <path
        d="m12.0001132 6c0-.3680016-.298-.66666827-.6666667-.66666827s-.6666667.29866667-.6666667.66666827v1.53133173l-2.82733329-3.29866666c-.21066667-.24666667-.56933334-.30533334-.84933334-.13733334l-2.84333333 1.706-2.96733333-3.56133333c-.236-.282-.65533334-.322-.94-.08533333-.282.23533333-.32066667.656-.08533334.93866666l3.33333334 4c.21133333.25266667.57466666.31466667.856.14466667l2.85-1.71 2.69066666 3.13866667h-1.884c-.36866666 0-.66666666.29866666-.66666666.66666666s.298.66666827.66666666.66666827h3.33333333c.0826667 0 .1646667-.0180016.2426667-.04933493.0326666-.01266667.058-.034.088-.05066667.0346666-.02066667.072-.03333333.1026666-.06066667.0066667-.00533333.0093334-.01333333.0153334-.01933333.0366666-.03333333.062-.074.09-.11466667.022-.032.048-.06.0633333-.09466666.0166667-.03533334.022-.07466667.0313333-.11266667.0126667-.04666667.0266667-.092.028-.14.0006667-.00866667.0053334-.016.0053334-.02466667z"
        fillRule="evenodd"
        transform="matrix(1 0 0 -1 0 9.999998)"
      />
    </svg>
  );
};

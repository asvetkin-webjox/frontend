import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from 'components/UI/Search';
import { SelectRegion } from 'components/UI/SelectRegion';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { sharedStyles } from 'lib/sharedStyles';

const useStyles = makeStyles(({ breakpoints, palette: { blueLight } }) => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  inner: {
    [breakpoints.down('sm')]: {
      marginBottom: '5px',
    },
  },
  block: {
    [breakpoints.down('sm')]: {
      marginBottom: '1px',
    },
  },
  dop: {
    position: 'relative',
    padding: '10px 15px',
    borderRadius: '0 0 4px 4px',
    border: `1px solid ${blueLight}`,
  },
  icon: {
    position: 'absolute',
    right: '15px',
    zIndex: '100',
    top: '9px',
    // transform: ({ toggledMenu }) => (toggledMenu ? 'rotate(90deg)' : 'rotate(0deg)'),
  },
}));

export const IndexMobile = ({ tableHandler, ...rest }) => {
  const { container, inner, block, dop, icon } = useStyles();
  const { button, blueButton, bigButton } = sharedStyles();

  return (
    <div className={container}>
      <div className={inner}>
        <div className={block}>
          <Search {...rest} />
        </div>
        <div className={block}>
          <SelectRegion width="100%" {...rest} />
        </div>
        <div className={dop}>
          Дополнительные настройки
          <div className={icon}>
            <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
          </div>
        </div>
      </div>
      <CustomButton
        disableRipple
        handler={tableHandler}
        name="Найти"
        styles={`${button} ${blueButton} ${bigButton}`}
      />
    </div>
  );
};

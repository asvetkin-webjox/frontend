import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleContext } from 'state/context/toggle-context';
import { DropRegion } from 'components/UI/DropDown/DropRegion';

const useStyles = makeStyles(({ palette: { secondary, blueLight } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: ({ width }) => width,
    height: '40px',
    padding: '0 16px',
    cursor: 'pointer',
    borderRadius: ({ isIndex }) => (isIndex ? '0px' : '4px'),
    userSelect: 'none',
    color: secondary.main,
    border: `1px solid ${blueLight}`,
  },
}));

export const SelectRegion = ({ width = '214px', isIndex, ...rest }) => {
  const {
    toggleState: { toggledMenu },
    menuHandler,
  } = useContext(ToggleContext);
  const { container } = useStyles({ width, isIndex });

  return (
    <div className={container} onClick={menuHandler} id="Регион">
      <DropRegion toggledMenu={toggledMenu} isIndex={isIndex} {...rest} />
    </div>
  );
};

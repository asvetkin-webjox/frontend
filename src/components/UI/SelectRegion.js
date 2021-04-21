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
    width: '214px',
    height: '40px',
    padding: '0 16px',
    cursor: 'pointer',
    borderRadius: '4px',
    userSelect: 'none',
    color: secondary.main,
    border: `1px solid ${blueLight}`,
  },
}));

export const SelectRegion = ({ regionHandler, regions }) => {
  const {
    toggleState: { toggledMenu },
    menuHandler,
  } = useContext(ToggleContext);
  const { container } = useStyles(toggledMenu);

  return (
    <div className={container} onClick={menuHandler} id="Регион">
      <DropRegion regionHandler={regionHandler} regions={regions} toggledMenu={toggledMenu} />
    </div>
  );
};

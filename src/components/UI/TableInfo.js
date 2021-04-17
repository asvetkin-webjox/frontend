import React, { useContext } from 'react';
import { DIMMED_BG } from 'components/state/constants';
import { useToggle } from 'hooks/useToggle';
import ClickAwayListener from 'react-click-away-listener';
import { tooltipsText } from 'components/layout/SearchTable/tooltipsText';
import { CustomTooltip } from 'components/UI/CustomTooltip';
import { ToggleContext } from 'components/state/context/toggle-context';

export const TableInfo = ({ index, classes, mobile = false }) => {
  const { dispatch } = useContext(ToggleContext);
  const { isToggle, toggleHandler, toggleOff } = useToggle();
  const dispatchHandler = () => [toggleHandler(), dispatch({ type: DIMMED_BG })];
  const calcIndex = mobile ? index + 1 : index - 1;

  return (
    <ClickAwayListener onClickAway={toggleOff}>
      <div>
        <CustomTooltip title={tooltipsText[calcIndex]} id="Инфо" open={isToggle} mobile={mobile}>
          <img src="icons/info.svg" className={classes} id="Инфо" onClick={dispatchHandler} />
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
};

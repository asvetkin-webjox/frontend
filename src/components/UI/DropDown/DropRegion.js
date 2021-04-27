import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { useRegionSelect } from 'hooks/useRegionSelect';

const useStyles = makeStyles(({ breakpoints }) => ({
  icon: {
    right: '14px',
    zIndex: '100',
    transform: ({ toggledMenu }) => (toggledMenu ? 'rotate(90deg)' : 'rotate(0deg)'),
  },
  dropDown: {
    position: 'absolute',
    left: '-1px',
    top: '53px',
    zIndex: '100',
    [breakpoints.down('md')]: {
      left: '-90px',
    },
    [breakpoints.down('sm')]: {
      top: '44px',
      left: ({ isIndex }) => (isIndex ? 'auto' : '-176px'),
      right: ({ isIndex }) => (isIndex ? 0 : ''),
    },
  },
}));

export const DropRegion = ({
  regions,
  toggledMenu,
  regionHandler,
  matchesMobile,
  matchesTablet,
  isIndex,
}) => {
  const { icon, dropDown } = useStyles({ isIndex, toggledMenu });
  const { isSelected, selectHandler } = useRegionSelect(regions, regionHandler);
  const isMobile = matchesMobile || matchesTablet;

  return (
    <Fragment>
      {!isMobile && (
        <Fragment>
          <div id="Регион">{isSelected}</div>
          <div className={icon}>
            <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
          </div>
        </Fragment>
      )}
      <div className={dropDown}>
        {toggledMenu && <DropDown regions={regions} selectHandler={selectHandler} />}
      </div>
    </Fragment>
  );
};

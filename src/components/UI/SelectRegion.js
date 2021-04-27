import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleContext } from 'state/context/toggle-context';
import { DropRegion } from 'components/UI/DropDown/DropRegion';
import { AuthContext } from 'state/context/auth-context';
import { ModalsContainer } from 'components/layout/Modals/ModalsContainer';

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

export const SelectRegion = ({ width = '214px', isIndex, modalHandler, ...props }) => {
  const {
    toggleState: { toggledMenu },
    menuHandler,
  } = useContext(ToggleContext);
  const { autState: isAuth } = useContext(AuthContext);

  const { container } = useStyles({ width, isIndex });
  const conditionalHandler = (e) => {
    if (!isIndex) return menuHandler(e);
    if (!isAuth) return modalHandler(e, 'Login');
  };

  return (
    <div className={container} onClick={conditionalHandler} id="Регион">
      <DropRegion toggledMenu={toggledMenu} isIndex={isIndex} {...props} />
      <ModalsContainer {...props} />
    </div>
  );
};

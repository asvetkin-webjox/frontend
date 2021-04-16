import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LOGOUT } from 'components/state/constants';
import { AuthContext } from 'components/state/context/auth-context';
import { CustomButton } from 'components/UI/Buttons/CustomButton';
import { ID_LOGOUT } from 'config/config';
import { sharedStyles } from 'lib/sharedStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: '#fff',
  },
}));

export const UserHeader = ({}) => {
  const { container, avatar } = useStyles();
  const { dispatch } = useContext(AuthContext);
  const logOut = () => dispatch({ type: LOGOUT });
  const { button, blueButton, smallButton } = sharedStyles();

  return (
    <div className={container}>
      <div style={{ marginRight: '24px' }}>
        <CustomButton
          handler={logOut}
          id={ID_LOGOUT}
          name="Выход"
          styles={`${button} ${blueButton} ${smallButton}`}
        />
      </div>
      <div className={avatar} />
    </div>
  );
};

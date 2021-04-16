import React, { Fragment } from 'react';
import { DropDownTemplate } from 'templates/DropDownTemplate';
import { DropElTemplate } from 'templates/DropElTemplate';
import { registerNames } from 'components/layout/Modals/registerNames';
import { RegisterInput } from 'components/UI/Input/RegisterInput';
import { DoubleInput } from 'components/UI/Input/DoubleInput';
import { dropDownStyle } from 'lib/dropDownStyle';

export const RegisterContent = ({ isToggle, toggleOn, togglePassword, ...rest }) => {
  const { ...styles } = dropDownStyle();

  return (
    <Fragment>
      {registerNames.map((el, i) => {
        const { icon, placeholder, placeholders, name, names } = el;
        if (i === 0)
          return (
            <div style={{ marginBottom: '20px' }} onClick={toggleOn}>
              <DropDownTemplate
                isToggle={isToggle}
                name="Тип аккаунта"
                styles={styles}
                toggleOn={toggleOn}
              >
                {(props) => <DropElTemplate name="Компания" id="Компания" {...props} />}
              </DropDownTemplate>
            </div>
          );
        if (i === 1)
          return <DoubleInput icon={icon} placeholders={placeholders} names={names} {...rest} />;

        return (
          <RegisterInput
            icon={icon}
            placeholder={placeholder}
            name={name}
            isDouble={i === 1 || i === 2}
            togglePassword={togglePassword}
            {...rest}
          />
        );
      })}
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { DropDownTemplate } from 'templates/DropDownTemplate';
import { DropElTemplate } from 'templates/DropElTemplate';
import { registerNames } from 'components/layout/Modals/registerNames';
import { RegisterInput } from 'components/UI/Input/RegisterInput';
import { DoubleInput } from 'components/UI/Input/DoubleInput';
import { dropDownStyle } from 'lib/dropDownStyle';
import { useMedia } from 'hooks/useMedia';

export const RegisterContent = ({ isToggle, toggleOn, openHandler, isOpen, open, ...rest }) => {
  const { ...styles } = dropDownStyle();
  const { matchesMobile } = useMedia();

  return (
    <Fragment>
      {registerNames.map((el, i) => {
        const { icon, placeholder, placeholders, name, names } = el;
        if (i === 0)
          return (
            <div style={{ marginBottom: matchesMobile ? '16px' : '20px' }}>
              <DropDownTemplate
                isToggle={isOpen}
                name="Тип аккаунта"
                styles={styles}
                toggleOn={open}
                id="Тип аккаунта"
              >
                {(props) => [
                  <DropElTemplate name="Компания" id="Компания" {...props} />,
                  <DropElTemplate name="Частное лицо" id="Частное лицо" {...props} />,
                ]}
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
            blockName="register"
            isDouble={i === 1 || i === 2}
            {...rest}
          />
        );
      })}
    </Fragment>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputStyle } from 'components/UI/Input/InputStyle';

const useStyles = ({ styles, ...rest }) =>
  makeStyles((props) => {
    if (styles)
      return {
        ...InputStyle(props, rest),
        ...styles(props, rest),
      };

    return { ...InputStyle(props, rest) };
  });

export const Input = ({
  id,
  defaultV,
  searchHandler,
  onKeyUp,
  length,
  value,
  textMask,
  onBlur,
  onFocus,
  autoFocus,
  placeholder,
  isAdornment = false,
  required = false,
  rows = 0,
  name = '',
  multiline = false,
  isShrink = false,
  type = 'text',
  width = 'auto',
  styles = InputStyle,
}) => {
  const { inputLabel, notchedOutline, focused, input, root, shrink } = useStyles({
    width,
    isAdornment,
    styles,
  })();
  // const onChangeFunc = (e) => inputHandler(type)(e);

  const inputStyle = {
    variant: 'outlined',
    InputLabelProps: { classes: { root: inputLabel, focused, shrink }, shrink: isShrink },
    classes: {
      root,
    },
    inputProps: {
      maxLength: length || 50,
    },
    InputProps: {
      onChange: searchHandler,
      onKeyUp,
      value,
      onBlur,
      onFocus,
      inputComponent: textMask,
      classes: {
        input,
        focused,
        root,
        notchedOutline,
      },
    },
  };

  return (
    <TextField
      multiline={multiline}
      id={id}
      defaultValue={defaultV}
      required={required}
      rows={rows}
      name={name}
      autoFocus={autoFocus}
      type={type}
      key={id}
      placeholder={placeholder}
      {...inputStyle}
    />
  );
};

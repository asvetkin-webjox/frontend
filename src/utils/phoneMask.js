import NumberFormat from 'react-number-format';

export const phoneMask = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      // format="+7 (###) ### ## ##"
      isNumericString
    />
  );
};

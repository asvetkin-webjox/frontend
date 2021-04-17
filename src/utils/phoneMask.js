import NumberFormat from 'react-number-format';

export const phoneMask = (props) => {
  // console.log('phoneMask -> type', type);
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
      /* eslint-disable */
      // prefix={'+'}
      // format="+ #### ### ## ##"
      // isNumericString
    />
  );
}

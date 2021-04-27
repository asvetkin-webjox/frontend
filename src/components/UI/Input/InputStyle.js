export const InputStyle = (
  { palette: { secondary, blueLight } },
  { width = '100%', isAdornment = true },
) => ({
  input: {
    width,
    padding: isAdornment ? '11px 15px 11px 44px' : '10px 15px',
    color: secondary.main,
    borderRadius: '4px',
    border: `1px solid ${blueLight}`,
    '&::placeholder': {
      color: secondary.main,
      opacity: '1',
      transform: 'translateY(1px)',
      fontSize: '1.2rem',
    },
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px #17192D inset',
      WebkitTextFillColor: '#fff',
    },
  },
  notchedOutline: {
    border: 'none',
  },
  root: {
    width,
    height: '40px',
    alignItems: 'center',
  },
});

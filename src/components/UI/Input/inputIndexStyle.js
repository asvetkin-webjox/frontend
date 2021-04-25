export const inputIndexStyle = (
  { palette: { secondary, blueLight } },
  { width = '100%', isAdornment = true },
) => ({
  input: {
    width,
    padding: isAdornment ? '11px 15px 11px 44px' : '10px 15px',
    color: secondary.main,
    border: `1px solid ${blueLight}`,
    borderRadius: '4px 4px 0 0',
    height: '18px',
    '&::placeholder': {
      color: secondary.main,
      opacity: '1',
      transform: 'translateY(1px)',
      fontSize: '1.2rem',
    },
  },
});
console.log()

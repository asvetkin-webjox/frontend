import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const WalletIcon = () => {
  const { container } = useStyles();
  return (
    <svg
      className={container}
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9925 10.4186H8.12697C7.47544 10.4186 6.94238 9.87992 6.94238 9.22132V7.71392C6.94238 7.05545 7.47544 6.5166 8.12697 6.5166H12.9925V10.4186Z"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0849 2.92817L9.14608 1L4.5127 2.95881"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.72134 8.84918V8.84918C8.51317 8.84918 8.34277 8.67696 8.34277 8.46658C8.34277 8.2562 8.51317 8.08398 8.72134 8.08398C8.92951 8.08398 9.09991 8.2562 9.09991 8.46658C9.09991 8.67696 8.92951 8.84918 8.72134 8.84918Z"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1139 10.4235V11.8003C12.1139 12.4589 11.5807 12.9976 10.9292 12.9976H2.18472C1.53305 12.9976 1 12.4589 1 11.8003V5.1358C1 4.4772 1.53305 3.93848 2.18472 3.93848H10.9292C11.5807 3.93848 12.1139 4.4772 12.1139 5.1358V6.49524"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

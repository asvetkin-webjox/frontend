import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 5,
    top: '50%',
    transform: 'translateY(-65%)',
  },
});

export const ErrorMessageIcon = () => {
  const { container } = useStyles();
  return (
    <svg
      className={container}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99962 2.8457C5.74472 2.8457 5.53809 3.02803 5.53809 3.25294V7.05385C5.53809 7.27876 5.74472 7.46109 5.99962 7.46109C6.25453 7.46109 6.46116 7.27876 6.46116 7.05385V3.25294C6.46116 3.02803 6.25453 2.8457 5.99962 2.8457Z"
        fill="#D51E1E"
      />
      <mask
        id="mask0"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="2"
        width="2"
        height="6"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.99962 2.8457C5.74472 2.8457 5.53809 3.02803 5.53809 3.25294V7.05385C5.53809 7.27876 5.74472 7.46109 5.99962 7.46109C6.25453 7.46109 6.46116 7.27876 6.46116 7.05385V3.25294C6.46116 3.02803 6.25453 2.8457 5.99962 2.8457Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)"></g>
      <circle cx="5.99962" cy="8.76916" r="0.461538" fill="#D51E1E" />
      <mask
        id="mask1"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="8"
        width="2"
        height="2"
      >
        <circle cx="5.99962" cy="8.76916" r="0.461538" fill="white" />
      </mask>
      <g mask="url(#mask1)"></g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0V0ZM6 11.1429C3.15968 11.1429 0.857143 8.84032 0.857143 6C0.857143 3.15968 3.15968 0.857143 6 0.857143C8.84032 0.857143 11.1429 3.15968 11.1429 6C11.1429 8.84032 8.84032 11.1429 6 11.1429Z"
        fill="#D51E1E"
      />
      <mask
        id="mask2"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0V0ZM6 11.1429C3.15968 11.1429 0.857143 8.84032 0.857143 6C0.857143 3.15968 3.15968 0.857143 6 0.857143C8.84032 0.857143 11.1429 3.15968 11.1429 6C11.1429 8.84032 8.84032 11.1429 6 11.1429Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2)"></g>
    </svg>
  );
};

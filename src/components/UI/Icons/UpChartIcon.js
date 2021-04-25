import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const UpChartIcon = () => {
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
      <g clipPath="url(#clip0)">
        <path
          d="M8 6.2V11.8H11.2C11.6418 11.8 12 11.4418 12 11V1.8C12 1.35817 11.6418 1 11.2 1H8.8C8.35817 1 8 1.35817 8 1.8V4.6"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8.2V11.8H8V5"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 4.59961H4.8C4.35817 4.59961 4 4.95778 4 5.39961V6.59961"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 9.0002C0 8.55837 0.358172 8.2002 0.8 8.2002H4V11.8002H0.8C0.358172 11.8002 0 11.442 0 11.0002V9.0002"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 1L0 4.6"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.40039 1H4.00039"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 2.6V1"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.06836 6.87598L12.0004 10.8"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.06836 9.47559L10.2004 11.5996"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.06836 4.27637L12.0004 8.20037"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 1.7998L12 5.5998"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.59961 1L11.9996 3.4"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 17,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const ChartIcon = () => {
  const { container } = useStyles();
  return (
    <svg
      className={container}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.44301 7.35254L2.76172 11.2235"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.29004 9.90332L7.42165 13.0001"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83887 8.74219L9.37306 12.4157"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.94922 7.47656L10.7389 11.2508"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.76367 7.63477L12.1056 10.0851"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.80154 10.0078C1.39472 9.31647 1.13141 8.55024 1.02734 7.75488"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.87012 11.3468C4.52049 12.8963 6.89815 13.3941 9.0315 12.6368C11.1648 11.8795 12.6964 9.99391 13.0004 7.75065V7.60742"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6.03226C12.952 5.69211 12.8703 5.35756 12.7562 5.03355C12.0323 2.90454 10.1888 1.35161 7.96777 1V1V6.03226H13"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.03125 6.19871C1.39004 3.48281 3.5321 1.34869 6.24931 1H6.41964V6.80645C6.41964 7.23613 6.9577 7.58065 7.38738 7.58065H13.0003"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

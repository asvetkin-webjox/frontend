import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 5,
    top: '50%',
    transform: 'translateY(-65%)',
  },
});

export const InvestorIcon = () => {
  const { container } = useStyles();
  return (
    <svg
      className={container}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.08 9.68376C11.5869 9.677 12.0753 9.87364 12.4361 10.2297C12.797 10.5858 13 11.0716 13 11.5785C12.0526 12.6364 1.97263 12.6238 1 11.5785C0.999955 11.0716 1.20304 10.5858 1.56386 10.2297C1.92467 9.87364 2.41312 9.677 2.92 9.68376H2.94526"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1582 6.68426V6.68426C10.3727 6.61934 10.5071 6.40695 10.474 6.18531V5.4211C10.5016 5.31914 10.4822 5.21016 10.4211 5.12399C10.36 5.03782 10.2636 4.98348 10.1582 4.97584V3.52637"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.84178 4.1582V4.9761C3.73641 4.98374 3.63998 5.03808 3.57886 5.12425C3.51775 5.21042 3.49836 5.3194 3.52599 5.42136V6.05294C3.49274 6.30814 3.61766 6.558 3.84178 6.68452V6.68452"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.21094 2.26316V2.57895C3.21094 3.88632 4.5562 4.94737 5.92673 4.94737C6.7976 4.99116 7.62658 4.57066 8.10567 3.84211H10.1583V3.21053C10.1583 2.86171 9.87554 2.57895 9.52673 2.57895H8.42146C8.38301 1.99913 8.16191 1.44639 7.78989 1H3.21094"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8418 6.68457V7.78983C3.90664 9.50632 5.28321 10.8829 6.99969 10.9477C8.71617 10.8829 10.0927 9.50632 10.1576 7.78983V6.68457L8.57864 7.63194L7.63127 7.00036H6.36811L5.42074 7.63194L3.8418 6.68457Z"
        stroke="#FFD03C"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.68457 8.2627H7.31615"
        stroke="#717FB0"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.1055V12.3686"
        stroke="#707EAF"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

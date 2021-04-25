import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const DownChartIcon = () => {
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
          d="M3.87097 6.03194V11.4513H0.774194C0.346618 11.4513 0 11.1047 0 10.6771V3.32227"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.87097 4.48387V1.77419C3.87097 1.34662 3.52435 1 3.09677 1H0.774194C0.346618 1 0 1.34662 0 1.77419"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.87109 4.4834H6.96787C7.39544 4.4834 7.74206 4.83002 7.74206 5.25759V11.4511H3.87109V4.4834"
          stroke="#717FB0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.74219 7.96777H10.839C11.2665 7.96777 11.6132 8.31439 11.6132 8.74197V10.6775C11.6132 11.105 11.2665 11.4516 10.839 11.4516H7.74219V7.96777Z"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.85449 9.04785L10.2584 11.4517"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38672 8.06445L11.6125 10.2903"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6132 4.48387L7.74219 1"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0645 4.4834H11.6128"
          stroke="#FFD03C"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6133 2.93555V4.48393"
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

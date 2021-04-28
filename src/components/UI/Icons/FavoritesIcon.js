import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const FavoritesIcon = () => {
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
        d="M7 11.0098L9.99857 12.904C10.4717 13.2028 11.0552 12.7587 10.9297 12.196L10.1337 8.62541L12.7835 6.22272C13.2011 5.84438 12.9778 5.12623 12.4275 5.07759L8.93951 4.7681L7.57509 1.3984C7.35966 0.867201 6.64034 0.867201 6.42491 1.3984L5.06049 4.7681L1.57252 5.07759C1.02217 5.12623 0.798892 5.84438 1.21648 6.22272L3.86626 8.62541L3.0703 12.196C2.94478 12.7587 3.52832 13.2028 4.00143 12.904L7 11.0098Z"
        stroke="#717FB0"
        strokeWidth="0.5"
      />
      <mask
        id="mask0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 11.0098L9.99857 12.904C10.4717 13.2028 11.0552 12.7587 10.9297 12.196L10.1337 8.62541L12.7835 6.22272C13.2011 5.84438 12.9778 5.12623 12.4275 5.07759L8.93951 4.7681L7.57509 1.3984C7.35966 0.867201 6.64034 0.867201 6.42491 1.3984L5.06049 4.7681L1.57252 5.07759C1.02217 5.12623 0.798892 5.84438 1.21648 6.22272L3.86626 8.62541L3.0703 12.196C2.94478 12.7587 3.52832 13.2028 4.00143 12.904L7 11.0098Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </svg>
  );
};

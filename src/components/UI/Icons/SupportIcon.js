import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const SupportIcon = () => {
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
        d="M0.6 0.922852C0.2712 0.922852 0 1.17319 0 1.4767V8.49208C0 8.79559 0.2712 9.04593 0.6 9.04593H2V10.7075C2 10.836 2.02 10.9464 2.0736 11.0427C2.1264 11.1387 2.2232 11.22 2.3368 11.2477C2.564 11.303 2.7672 11.1871 2.9428 11.0213C3.50913 10.4865 4.48127 9.5966 4.97703 9.14277L4.97704 9.14275L5.0828 9.04593H11.4C11.7288 9.04593 12 8.79559 12 8.49208V1.4767C12 1.17319 11.7288 0.922852 11.4 0.922852H0.6ZM10.2 3.13824H1.8C1.6892 3.13824 1.6 3.22057 1.6 3.32285C1.6 3.42513 1.6892 3.50747 1.8 3.50747H10.2C10.3108 3.50747 10.4 3.42513 10.4 3.32285C10.4 3.22057 10.3108 3.13824 10.2 3.13824ZM1.8 4.61516H10.2C10.3108 4.61516 10.4 4.6975 10.4 4.79977C10.4 4.90205 10.3108 4.98439 10.2 4.98439H1.8C1.6892 4.98439 1.6 4.90205 1.6 4.79977C1.6 4.6975 1.6892 4.61516 1.8 4.61516ZM1.7944 6.09208H5.8056C5.9136 6.09208 6 6.17221 6 6.27153C6 6.37122 5.9132 6.45097 5.8056 6.45097H1.7944C1.6864 6.45097 1.6 6.37122 1.6 6.27153C1.6 6.17184 1.6868 6.09208 1.7944 6.09208ZM11.4 1.29208H0.6C0.4856 1.29208 0.4 1.3711 0.4 1.4767V8.49208C0.4 8.59768 0.4856 8.6767 0.6 8.6767H2.2C2.3104 8.6767 2.4 8.75941 2.4 8.86131V10.7075C2.4 10.836 2.4364 10.9667 2.6572 10.7629C3.2888 10.1665 4.4352 9.11793 4.8592 8.73024C4.8968 8.6959 4.9472 8.6767 5 8.6767H11.4C11.5144 8.6767 11.6 8.59768 11.6 8.49208V1.4767C11.6 1.3711 11.5144 1.29208 11.4 1.29208Z"
        fill="#717FB0"
      />
      <mask
        id="mask0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.6 0.922852C0.2712 0.922852 0 1.17319 0 1.4767V8.49208C0 8.79559 0.2712 9.04593 0.6 9.04593H2V10.7075C2 10.836 2.02 10.9464 2.0736 11.0427C2.1264 11.1387 2.2232 11.22 2.3368 11.2477C2.564 11.303 2.7672 11.1871 2.9428 11.0213C3.50913 10.4865 4.48127 9.5966 4.97703 9.14277L4.97704 9.14275L5.0828 9.04593H11.4C11.7288 9.04593 12 8.79559 12 8.49208V1.4767C12 1.17319 11.7288 0.922852 11.4 0.922852H0.6ZM10.2 3.13824H1.8C1.6892 3.13824 1.6 3.22057 1.6 3.32285C1.6 3.42513 1.6892 3.50747 1.8 3.50747H10.2C10.3108 3.50747 10.4 3.42513 10.4 3.32285C10.4 3.22057 10.3108 3.13824 10.2 3.13824ZM1.8 4.61516H10.2C10.3108 4.61516 10.4 4.6975 10.4 4.79977C10.4 4.90205 10.3108 4.98439 10.2 4.98439H1.8C1.6892 4.98439 1.6 4.90205 1.6 4.79977C1.6 4.6975 1.6892 4.61516 1.8 4.61516ZM1.7944 6.09208H5.8056C5.9136 6.09208 6 6.17221 6 6.27153C6 6.37122 5.9132 6.45097 5.8056 6.45097H1.7944C1.6864 6.45097 1.6 6.37122 1.6 6.27153C1.6 6.17184 1.6868 6.09208 1.7944 6.09208ZM11.4 1.29208H0.6C0.4856 1.29208 0.4 1.3711 0.4 1.4767V8.49208C0.4 8.59768 0.4856 8.6767 0.6 8.6767H2.2C2.3104 8.6767 2.4 8.75941 2.4 8.86131V10.7075C2.4 10.836 2.4364 10.9667 2.6572 10.7629C3.2888 10.1665 4.4352 9.11793 4.8592 8.73024C4.8968 8.6959 4.9472 8.6767 5 8.6767H11.4C11.5144 8.6767 11.6 8.59768 11.6 8.49208V1.4767C11.6 1.3711 11.5144 1.29208 11.4 1.29208Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </svg>
  );
};

import classNames from "classnames";
import Styles from './SpeachBubbleSvg.module.scss';

export const SpeachBubbleSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 205.54 139.41"
    overflow="visible"
    {...props}
    className={classNames(Styles.wrapper, props.className)}
  >
    <defs>
      <linearGradient
        id="gradient"
        gradientTransform="rotate(25)"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" style={{ stopColor: "hsl(var(--small-bento-item-deg), 1%, 55%)" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--small-bento-item-deg), 1%, 75%)" }} />
      </linearGradient>
    </defs>
    <path
      d="M136.03.5h-66.53C31.42.5.25,31.67.25,69.76H.25c0,38.09,31.17,69.26,69.26,69.26h9.43c2.54,8.33,11.34,25.76,41.03,31.76,0,0-10.37-19.89-1.27-31.76h17.33c38.09,0,69.26-31.17,69.26-69.26h0C205.29,31.67,174.13.5,136.03.5Z"
      fill="url(#gradient)"
    />
    <path
      className={Styles.Blick}
      d="M193.19,103.2c-1.74,4.53-3.84,8.88-6.2,13.11-.04.07.06.14.11.08,11.28-12.32,18.18-28.72,18.18-46.64,0-19.04-7.79-36.36-20.34-48.91C172.4,8.29,155.08.5,136.03.5h-66.52C42.22.5,18.48,16.5,7.22,39.59c-.03.07.06.14.11.08,1.78-1.65,3.95-5.67,20.79-19s27.01-15.17,41.39-15.17h65.46c36.11,0,65.94,29.31,65.31,65.41.02,15.53-5.56,28.28-7.09,32.29Z"
    />
  </svg>
);

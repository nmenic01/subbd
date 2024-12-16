import * as React from "react";
import type { SVGProps } from "react";

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        d="M14.73 2.268a4.3 4.3 0 0 0-3.2-1.393c-.923 0-1.769.292-2.514.868Q8.452 2.18 8 2.804a5.1 5.1 0 0 0-1.016-1.061A4.03 4.03 0 0 0 4.47.875a4.3 4.3 0 0 0-3.2 1.393C.45 3.156 0 4.368 0 5.683c0 1.354.504 2.592 1.587 3.899.968 1.168 2.36 2.355 3.972 3.728.55.47 1.175 1.001 1.822 1.567a.94.94 0 0 0 1.237 0c.648-.566 1.272-1.098 1.823-1.567 1.612-1.374 3.004-2.56 3.972-3.728C15.496 8.275 16 7.037 16 5.683c0-1.314-.45-2.527-1.27-3.415"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHeart;

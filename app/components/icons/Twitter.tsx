import * as React from "react";
import type { SVGProps } from "react";

const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#twitter_svg__a)">
      <path
        d="M9.49 6.775 15.317 0h-1.381L8.876 5.883 4.834 0H.172l6.112 8.895L.172 16h1.381l5.344-6.212L11.167 16h4.661zM7.597 8.974l-.62-.886L2.051 1.04h2.121L8.15 6.728l.62.886 5.168 7.394h-2.121z"
      />
    </g>
    <defs>
      <clipPath id="twitter_svg__a">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTwitter;

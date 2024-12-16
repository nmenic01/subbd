import * as React from "react";
import type { SVGProps } from "react";

const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    {...props}
  >
    <path
      fillOpacity={0.7}
      d="m7.847 11.65-.33 4.654c.473 0 .678-.203.924-.447l2.219-2.121 4.598 3.367c.844.47 1.438.223 1.665-.776l3.019-14.143C20.21.936 19.492.448 18.67.754L.928 7.547c-1.21.47-1.192 1.145-.206 1.451l4.536 1.411 10.536-6.592c.496-.329.947-.147.576.181z"
    />
  </svg>
);

export default SvgTelegram;

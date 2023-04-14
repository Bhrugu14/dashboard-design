import * as React from "react";
import { SVGProps } from "react";

export const IcAward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="-0.5 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683A12.017 12.017 0 0 1 26 28.334V34.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6v-6.166a12.017 12.017 0 0 1-9.317-7.834H11a5 5 0 0 1-5-5v-6a1 1 0 0 1 1-1h5v-1Zm24 9v-6h4v5a3 3 0 0 1-3 3h-1v-2Zm-24-6H8v5a3 3 0 0 0 3 3h1v-8Z"
      fill={props.fill}
    />
  </svg>
);

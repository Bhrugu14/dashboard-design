import * as React from "react";
import { SVGProps } from "react";

export const IcAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={props.fill}
      d="M37 40H11l-6 6V12c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6z"
    />
    <g fill="transparent">
      <path d="M22 20h4v11h-4z" />
      <circle cx={24} cy={15} r={2} />
    </g>
  </svg>
);

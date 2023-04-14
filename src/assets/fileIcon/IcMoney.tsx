import * as React from "react";
import { SVGProps } from "react";

export const IcMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon glyph"
  >
    <path
      d="M16 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-6 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm12-2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1h10a3 3 0 0 0 3-3V8h1a2 2 0 0 1 2 2Z"
      style={{
        fill: props.fill,
      }}
    />
  </svg>
);

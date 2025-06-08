import type { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={13} {...props}>
    <title>{"tail-in"}</title>
    <path
      fill="#0000000"
      d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
      opacity={0.13}
    />
    <path
      fill="currentColor"
      d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
    />
  </svg>
);
export default SvgComponent;

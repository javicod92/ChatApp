import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={13} {...props}>
    <title>{"tail-out"}</title>
    <path
      d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
      opacity={0.13}
    />
    <path
      fill="currentColor"
      d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
    />
  </svg>
);
export default SvgComponent;

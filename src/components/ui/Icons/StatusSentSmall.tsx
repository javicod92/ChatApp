import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={11} fill="none" viewBox="0 0 12 11" {...props}>
    <title>{"msg-delivered"}</title>
    <path
      fill="currentcolor"
      d="M11.155.653A.457.457 0 0 0 10.85.55a.493.493 0 0 0-.38.178L4.28 8.365 1.875 6.093a.463.463 0 0 0-.336-.146.47.47 0 0 0-.344.146l-.31.31a.445.445 0 0 0-.14.337c0 .136.046.25.14.343l2.995 2.996a.724.724 0 0 0 .502.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374l-.337-.273Z"
    />
  </svg>
);
export default SvgComponent;

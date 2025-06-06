import type { SVGProps } from "react";
const DownMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <title>{"ic-chevron-down-menu"}</title>
    <path
      fill="currentColor"
      d="m10 12.1 4.9-4.9a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-5.6 5.6c-.2.2-.434.3-.7.3a.96.96 0 0 1-.7-.3L3.7 8.6a.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275l4.9 4.9Z"
    />
  </svg>
);
export default DownMenu;

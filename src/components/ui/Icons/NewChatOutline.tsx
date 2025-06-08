import type { SVGProps } from "react";
const NewChatOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <title>{"new-chat-outline"}</title>
    <path
      fill="currentColor"
      d="M9.533 12.991h1.976v1.976c0 .433.254.85.667.982a.994.994 0 0 0 1.315-.94v-2.018h1.976c.433 0 .851-.255.982-.668a.994.994 0 0 0-.94-1.314H13.49V9.033c0-.433-.255-.85-.668-.982a.995.995 0 0 0-1.314.94v2.018H9.49a.994.994 0 0 0-.94 1.314c.13.413.548.668.982.668Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.944 5.526 3 8.848v8.485A2.667 2.667 0 0 0 5.667 20h13.666A2.667 2.667 0 0 0 22 17.333V6.667A2.667 2.667 0 0 0 19.333 4H1.795a1 1 0 0 0-.85 1.526ZM5 8.28v9.053c0 .369.298.667.667.667h13.666a.667.667 0 0 0 .667-.667V6.667A.667.667 0 0 0 19.333 6H3.59L5 8.28Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NewChatOutline;

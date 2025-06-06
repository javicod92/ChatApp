import type { SVGProps } from "react";
const VideoCallRefreshed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <title>{"video-call-refreshed"}</title>
    <path
      fill="currentColor"
      d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h12c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v4.5l3.15-3.15c.167-.167.35-.208.55-.125.2.083.3.242.3.475v8.6c0 .233-.1.392-.3.475-.2.083-.383.042-.55-.125L18 13.5V18c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 16 20H4Zm0-2h12V6H4v12Z"
    />
  </svg>
);
export default VideoCallRefreshed;

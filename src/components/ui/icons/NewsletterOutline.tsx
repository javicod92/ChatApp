import type { SVGProps } from "react";
const NewsletterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <title>{"newsletter-outline"}</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.83 8.634a1 1 0 0 1 1.366.365c.512.883.804 1.91.804 3.001a5.977 5.977 0 0 1-.804 3.001A1 1 0 0 1 15.466 14c.34-.588.534-1.27.534-2s-.195-1.412-.535-2a1 1 0 0 1 .365-1.366Zm-7.66 0A1 1 0 0 1 8.535 10 3.977 3.977 0 0 0 8 12c0 .73.195 1.412.535 2A1 1 0 0 1 6.804 15 5.977 5.977 0 0 1 6 12c0-1.091.292-2.118.804-3.001a1 1 0 0 1 1.366-.365Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m5.332 16.483-.236.79c-.232.776-.475 1.598-.679 2.31.712-.204 1.534-.447 2.31-.68l.79-.235.727.389c1.12.6 2.397.943 3.756.943 4.415 0 8-3.585 8-8s-3.585-8-8-8-8 3.585-8 8c0 1.359.343 2.636.943 3.756l.39.727ZM3.18 16.7C2.63 18.54 2 20.69 2 21c0 .55.45 1 1 1 .31 0 2.46-.63 4.3-1.18 1.4.75 3 1.18 4.7 1.18 5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 1.7.43 3.3 1.18 4.7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NewsletterOutline;

import { SVGProps } from "react";

export const SendIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="24" fill="#99F9EA" />
      <path
        d="M15.9 16.8L18.3336 24.0529L15.9 31.3059L31.3125 24.0529L15.9 16.8Z"
        stroke="#081212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3336 24.053H31.3126"
        stroke="#081212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

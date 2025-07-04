import { SVGProps } from "react";

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10Z"
        stroke="#96999E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3033 15.3033L10.2442 10.2442C10.0875 10.0875 10 9.87583 10 9.655V2.5"
        stroke="#96999E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0586 9.96667L16.4919 6.25"
        stroke="#96999E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

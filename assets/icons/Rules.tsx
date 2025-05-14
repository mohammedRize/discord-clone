import { SVGProps } from "react";

export const RulesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.4 2H1V15.5H7.3C8.83 15.5 10 16.67 10 18.2V5.6C10 3.62 8.38 2 6.4 2Z"
        stroke="#88898A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6 10.1L15.4 11.9L19 8.29999"
        stroke="#88898A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4.7V2H13.6C11.62 2 10 3.62 10 5.6V18.2C10 16.67 11.17 15.5 12.7 15.5H19V13.43"
        stroke="#88898A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

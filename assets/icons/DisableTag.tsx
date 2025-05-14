import { SVGProps } from "react";

export const DisableTagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_3_10445"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M20 0H0V19.9767L7.23624 20V10.4424H20V0Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3_10445)">
        <path
          d="M0 13.9655V12.8214H6.032V7.42769H0V6.28357H6.032V0H7.23886V6.28357H12.2857V0H13.4926V6.28357H20V7.42769H13.4926V12.8214H17.4971V13.9655H13.4926V19.5227H12.2857V13.9655H7.23886V19.5227H6.032V13.9655H0ZM7.23886 12.8214H12.2857V7.42769H7.23886V12.8214Z"
          fill="#88898A"
        />
      </g>
      <path
        d="M19.0858 17.4046C19.0858 17.5919 19.0109 17.7715 18.8775 17.904C18.7442 18.0364 18.5633 18.1108 18.3747 18.1108H14.108L12.6858 19.5233V13.8734C12.6858 13.6861 12.7607 13.5064 12.8941 13.374C13.0274 13.2415 13.2083 13.1671 13.3969 13.1671H18.3747C18.5633 13.1671 18.7442 13.2415 18.8775 13.374C19.0109 13.5064 19.0858 13.6861 19.0858 13.8734V17.4046Z"
        stroke="#88898A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

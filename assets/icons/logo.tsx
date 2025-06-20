import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="38"
      viewBox="0 0 25 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.00971 22.8375L10.2346 26.0178L0 38V0H12.055L25 8.39162L12.9854 22.8375H8.00971Z"
        fill="#99F9EA"
      />
      <path
        d="M13.0666 22.9141H23.6249V37.7814L13.0666 22.9141Z"
        fill="#99F9EA"
      />
    </svg>
  );
};

export default Logo;

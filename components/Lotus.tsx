import React from "react";

const Lotus = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 54C32 54 12 44 12 28C12 16 32 10 32 10C32 10 52 16 52 28C52 44 32 54 32 54Z" />
      <path d="M32 54C32 54 24 44 24 32C24 24 32 20 32 20C32 20 40 24 40 32C40 44 32 54 32 54Z" />
      <path d="M32 54C32 54 28 48 28 40C28 36 32 34 32 34C32 34 36 36 36 40C36 48 32 54 32 54Z" />
    </g>
  </svg>
);

export default Lotus;

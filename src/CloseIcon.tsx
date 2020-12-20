import React from "react";

export const CloseIcon = ({ fill = "rgba(0,0,0,0.43)", ...props }) => (
  <svg width={17} height={16} viewBox="0 0 17 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.207 3.293a1 1 0 00-1.414 0L8.5 6.586 5.207 3.293a1 1 0 00-1.414 1.414L7.086 8l-3.293 3.293a1 1 0 101.414 1.414L8.5 9.414l3.293 3.293a1 1 0 001.414-1.414L9.914 8l3.293-3.293a1 1 0 000-1.414z"
      fill={fill}
    />
  </svg>
);
 
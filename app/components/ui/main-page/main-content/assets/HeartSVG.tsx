import React from "react";

type Props = {};

function HeartSVG({}: Props) {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="#fff"
        d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"
      />
    </svg>
  );
}

export default HeartSVG;

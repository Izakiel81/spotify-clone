import React from "react";

type Props = {
  className?: string;
};

function PlusSVG({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      id="plus"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M5,12H19M12,5V19"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
}

export default PlusSVG;

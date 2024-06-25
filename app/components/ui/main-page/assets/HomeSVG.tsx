import * as React from "react";
type Props = {
  className?: string;
};
const HomeSVG: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
  </svg>
);
export default HomeSVG;

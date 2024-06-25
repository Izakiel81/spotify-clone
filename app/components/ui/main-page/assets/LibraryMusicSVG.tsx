import * as React from "react";
type Props = {
  className?: string;
};
const LibraryMusicSVG = ({ className }: Props) => (
  <svg
    className={className}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z " />
      </g>
    </g>
    <g>
      <g>
        <path d="M247.742,148.645v116.103c-2.694-0.317-5.447-0.491-8.258-0.491c-32.415,0-57.806,21.765-57.806,49.548 s25.392,49.548,57.806,49.548s57.806-21.765,57.806-49.548V198.194h41.29v-49.548H247.742z" />
      </g>
    </g>
  </svg>
);
export default LibraryMusicSVG;

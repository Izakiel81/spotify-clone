import React from "react";
import Image from "next/image";
import styles from "./Song.module.css";
import PlaySVG from "../../assets/PlaySVG";
import classNames from "classnames";

type Props = {};

function Song({}: Props) {
  const [isOnCover, setIsOnCover] = React.useState<boolean>(false);

  return (
    <div className={styles.song_wrapper} onMouseEnter={() => setIsOnCover(true)} onMouseLeave={() => setIsOnCover(false)}>
      <span className={styles.cover}>
        <Image className={styles.cover_img} src="" alt="" />
        <span className={classNames(isOnCover ? [styles.play_button, styles.active] : [styles.play_button, styles.inactive])}>
          <PlaySVG className={styles.play_svg} />
        </span>
      </span>
      <span className={styles.title}>Title</span>
      <span className={styles.author}>Author</span>
    </div>
  );
}

export default Song;

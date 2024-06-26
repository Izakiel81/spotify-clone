import React from "react";
import Song from "./song/Song";
import styles from "./Songs.module.css";

type Props = {};

function Songs({}: Props) {
  return (
    <div className={styles.songs_wrapper}>
      <Song />
    </div>
  );
}

export default Songs;

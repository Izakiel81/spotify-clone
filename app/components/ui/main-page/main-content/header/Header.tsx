import React from "react";
import styles from "./Header.module.css";
import ArrowSVG from "../assets/ArrowSVG";
import HeartSVG from "../assets/HeartSVG";
import UserSVG from "../assets/UserSVG";


function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.header_title}>
        <span className={styles.header_buttons_container}>
          <span className={styles.arrow_button}>
            <ArrowSVG className={styles.header_arrow_svg} />
          </span>
          <span className={styles.arrow_button}>
            <ArrowSVG
              className={styles.header_arrow_svg}
              style={{ transform: "rotate(180deg)" }}
            />
          </span>
        </span>
        <span className={styles.login_container}>
          <button className={styles.login_button}>Logout</button>
          <span className={styles.login_icon}>
            <UserSVG className={styles.login_svg} />
          </span>
        </span>
      </span>

      <h1>Welcome back</h1>

      <div className={styles.play_lists_container}>
        <div className={styles.play_list}>
          <span className={styles.liked_song}>
            <HeartSVG />
          </span>
          <span className={styles.playlist_name}>Liked Songs</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import styles from "./MainContent.module.css";
import ArrowSVG from "./assets/ArrowSVG";
import UserSVG from "./assets/UserSVG";

type Props = {};

function MainContent({}: Props) {
  return (
    <>
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
            <span className={styles.login_icon}><UserSVG className={styles.login_svg}/></span>
          </span>
        </span>
      </header>
    </>
  );
}

export default MainContent;

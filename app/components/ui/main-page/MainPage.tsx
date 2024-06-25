import React from "react";
import styles from "./MainPage.module.css";
import HomeSVG from "./assets/HomeSVG";
import SearchSVG from "./assets/SearchSVG";
import Navbar from "./navbar/Navbar";


function MainPage() {
  return (
    <div className={styles.main_page}>
      <Navbar />
      <main className={styles.main_content}>hi</main>
    </div>
  );
}

export default MainPage;

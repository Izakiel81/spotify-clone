import React from "react";
import styles from "./MainPage.module.css";
import HomeSVG from "./navbar/assets/HomeSVG";
import SearchSVG from "./navbar/assets/SearchSVG";
import Navbar from "./navbar/Navbar";
import MainContent from "./main-content/MainContent";
import getSongs from "../../../../actions/getSongs";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const revalidate = 0;

async function MainPage() {

  const userSongs = await getSongsByUserId();

  return (
    <div className={styles.main_page}>
      <Navbar songs={userSongs}/>
      <main className={styles.main_content}>
        <MainContent />
      </main>
    </div>
  );
}

export default MainPage;

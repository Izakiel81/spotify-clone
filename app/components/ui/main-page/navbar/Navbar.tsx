import React from "react";
import styles from "./Navbar.module.css";
import HomeSVG from "./assets/HomeSVG";
import SearchSVG from "./assets/SearchSVG";
import LibraryMusicSVG from "./assets/LibraryMusicSVG";
import PlusSVG from "./assets/PlusSVG";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

function Navbar() {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const {user} = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    } 
    // TODO: Check for subscription
    return uploadModal.onOpen();
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.nav_item}>
        <span className={styles.nav_list_item_wrapper}>
          <span className={styles.nav_list_item}>
            <HomeSVG className={styles.nav_list_item_svg} />
            Home
          </span>
        </span>
        <span className={styles.nav_list_item_wrapper}>
          <span className={styles.nav_list_item}>
            <SearchSVG className={styles.nav_list_item_svg} /> Search
          </span>
        </span>
      </div>
      <div className={styles.nav_item_second}>
        <span className={styles.nav_list_item_wrapper}>
          <span className={styles.nav_list_item}>
            <LibraryMusicSVG className={styles.nav_list_item_svg} /> Your
            library
          </span>
          <span className={styles.nav_list_item} onClick={onClick}> 
            <PlusSVG className={styles.nav_list_item_svg} />
          </span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

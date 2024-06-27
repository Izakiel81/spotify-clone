'use client';
import React from "react";
import styles from "./Header.module.css";
import ArrowSVG from "../assets/ArrowSVG";
import HeartSVG from "../assets/HeartSVG";
import UserSVG from "../assets/UserSVG";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import Button from "../../../button/Button";

function Header() {
  const router = useRouter();

  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO: Reset any playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully!");
    }
  };

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
        {user ? (
          <span className={styles.logout_container}>
            <button className={styles.logout_button} onClick={handleLogout}>
              Log out
            </button>
            <span className={styles.logout_icon}>
              <UserSVG className={styles.logout_svg} />
            </span>
          </span>
        ) : (
          <span className={styles.logout_container}>
            <Button
              className="
              bg-transparent
              text-neutral-300
              font-medium"
              onClick={authModal.onOpen}
            >
              Sign up
            </Button>
            <button className={styles.logout_button} style={{width: "180px"}} onClick={authModal.onOpen}>
              Log in
            </button>
          </span>
        )}
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

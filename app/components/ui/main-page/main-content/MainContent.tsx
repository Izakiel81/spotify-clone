import React from "react";
import styles from "./MainContent.module.css";
import ArrowSVG from "./assets/ArrowSVG";
import UserSVG from "./assets/UserSVG";
import HeartSVG from "./assets/HeartSVG";
import Header from "./header/Header";
import Songs from "./songs/Songs";

type Props = {};

function MainContent({}: Props) {
  return (
    <>
     <Header/>
     <Songs/>
    </>
  );
}

export default MainContent;

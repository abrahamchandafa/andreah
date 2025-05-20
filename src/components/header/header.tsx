"use client"
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link as JLink } from "@mui/joy";
import { ScrollProgress } from "@/lib/scrollProgress";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : styles.static}`}
    >
      <div className={`${styles.andreahNav} font-bold`}>
        <p className={styles.andreahP}>ANDREAH</p>
      </div>

      <nav className={`${styles.andreahNav} font-bold`}>
        <div><JLink color="plain">ABOUT</JLink></div>
        <div><JLink color="plain">EVENTS</JLink></div>
        <div><JLink color="plain">ALBUMS</JLink></div>
        <div><JLink color="plain">BLOG</JLink></div>
        <div><JLink color="plain">CONTACT</JLink></div>
      </nav>
      <ScrollProgress className="top-[100px]" />
    </header>
  );
};

export default Header;

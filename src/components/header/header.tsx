"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link as JLink, Drawer, IconButton, Stack } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter as FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";

const navLinks = ["HOME", "WATCH", "SIGN UP", "BLOG", "CONTACT"];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : styles.static
      } overflow-hidden`}
    >
      <div className="flex justify-between items-center w-full px-4 py-3">
        {/* Logo */}
        {/* <div className={`${styles.andreahNav} font-bold`}>
          <p className={styles.andreahP}>ANDREAH</p>
        </div> */}
        <div className="">
          <Image
            src="/logo.png"
            alt="Andrea Hosking"
            width={270}
            height={100}
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>

        {/* Desktop Nav */}
        {/* Desktop Nav + Social Icons */}
        <nav className="hidden md:flex flex-col justify-between items-center w-full px-4">
          <div className="flex gap-6 font-bold">
            {navLinks.map((label) => (
              <JLink
                key={label}
                color="neutral"
                sx={{ color: "white", fontSize: "24px" }}
                variant="plain"
                href={`#${label}`}
              >
                {label}
              </JLink>
            ))}
          </div>

          <div className="flex space-x-6 text-4xl">
            <a
              href="https://www.instagram.com/andreah.music "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="http://open.spotify.com/artist/02yssJvjMJdJ3nueVhig4j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="hover:text-green-500 transition"
            >
              <FaSpotify />
            </a>
            <a
              href="https://www.youtube.com/@andreahmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/andreahmusic "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.tiktok.com/@andreahmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-blue-400 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/ANDREAH.live "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </nav>
        
        <div className="text-5xl">
          <a href=""><MdAccountCircle /></a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <IconButton variant="plain" onClick={() => setDrawerOpen(true)}>
            <MenuIcon className="text-white" />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
      >
        <div className="p-4 bg-black h-full w-[80vw] text-white">
          <div className="flex justify-between items-center mb-6">
            <p className="font-bold text-xl">ANDREAH</p>
            <IconButton variant="plain" onClick={() => setDrawerOpen(false)}>
              <CloseIcon className="text-white" />
            </IconButton>
          </div>
          <Stack spacing={2}>
            {navLinks.map((label) => (
              <JLink
                key={label}
                color="neutral"
                sx={{ color: "white" }}
                href="#"
                onClick={() => setDrawerOpen(false)}
              >
                {label}
              </JLink>
            ))}
          </Stack>

          <p className="font-bold text-xl underline my-8">SOCIALS</p>
          <Stack spacing={2}>
            <div className="flex space-x-8 text-2xl flex-col space-y-6 pl-4 ">
              <a
                href="https://www.instagram.com/andreah.music"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="http://open.spotify.com/artist/02yssJvjMJdJ3nueVhig4j"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="hover:text-green-500 transition"
              >
                <FaSpotify />
              </a>
              <a
                href="https://www.youtube.com/@andreahmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://x.com/andreahmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.tiktok.com/@andreahmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="hover:text-blue-400 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/ANDREAH.live"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </Stack>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

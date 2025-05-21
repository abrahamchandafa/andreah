"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link as JLink, Drawer, IconButton, Stack } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = ["ABOUT", "EVENTS", "ALBUMS", "BLOG", "CONTACT"];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : styles.static} overflow-hidden`}>
      <div className="flex justify-between items-center w-full px-4 py-3">
        {/* Logo */}
        <div className={`${styles.andreahNav} font-bold`}>
          <p className={styles.andreahP}>ANDREAH</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-bold">
          {navLinks.map((label) => (
            <JLink key={label} color="plain" href="#">
              {label}
            </JLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <IconButton variant="plain" onClick={() => setDrawerOpen(true)}>
            <MenuIcon className="text-white" />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="right">
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
                href="#"
                onClick={() => setDrawerOpen(false)}
              >
                {label}
              </JLink>
            ))}
          </Stack>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

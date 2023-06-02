"use client";
import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Header.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

function Header() {
  const { language } = useContext(AppContext);
  const [isOpen, SetIsOpen] = useState(false);

  function handleMenu() {
    SetIsOpen((PrevIsOpen) => !PrevIsOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className="logo"></div>
      </div>
      <div
        className={`${isOpen && "openMenu"} ${isOpen ? styles.openMenu : ""}  ${
          styles.menu
        }`}
      >
        <div
          onClick={handleMenu}
          className={` ${isOpen ? styles.buttonMenuMobileOpen : ""} ${
            styles.buttonMenuMobile
          }`}
        >
          <CgMenuGridR />
        </div>
        <ul>
          <li>
            <Link href="/projects">{language.header.projects}</Link>
          </li>
          <li>
            <Link href="/aboutme">{language.header.aboutme}</Link>
          </li>
          <li>
            <Link href="/contact">{language.header.contact}</Link>
          </li>
        </ul>
        <div className={styles.socialMobile}>
          <SocialMedia />
        </div>
      </div>
      <div className={styles.sectionMenu}>
        <div className={styles.toggles}>
          <ToggleLanguage />
          <ToggleTheme />
        </div>
        <div className={styles.socialDesktop}>
          <SocialMedia />
        </div>
        <div onClick={handleMenu} className={styles.buttonMenuMobile}>
          <CgMenuGridR />
        </div>
      </div>
    </header>
  );
}

export default Header;

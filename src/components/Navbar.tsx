import { useState } from "react";
import HamburgerMenuIcon from "../assets/hamburger-menu-icon.png";
import styles from "@/components/Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <img
          src={HamburgerMenuIcon}
          alt="hamburger-menu-icon"
          className={styles["hamburger-menu-icon"]}
          width="30px"
          onClick={toggleMenu}
        />
        <ul
          className={`${styles["menu-list"]} ${
            isMenuOpen ? styles.open : styles.closed
          }`}
        >
          <li className={styles["menu-list-item"]}>
            <a href="/">Home</a>
          </li>
          <li className={styles["menu-list-item"]}>
            <a href="/about">About</a>
          </li>
          <li className={styles["menu-list-item"]}>
            <a href="/projects">Projects</a>
          </li>
          <li className={styles["menu-list-item"]}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

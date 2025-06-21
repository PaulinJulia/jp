import { useState } from "react";
import styles from "@/components/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <FontAwesomeIcon
          title="hamburger-menu-icon"
          icon={faBars}
          className={styles["hamburger-menu-icon"]}
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

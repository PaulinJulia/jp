import { useState } from "react";
import HamburgerMenuIcon from "../assets/hamburger-menu-icon.png";
import { RainbowText } from "./RainbowText";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className={styles["hero-image"]}>
          <nav>
            <img
              src={HamburgerMenuIcon}
              alt="hamburger-menu-icon"
              width="30px"
              onClick={toggleMenu}
            />
            <ul
              className={`${styles["menu-list"]} ${
                isMenuOpen ? "" : styles.closed
              }`}
            >
              <li>
                <a href="/">Start</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <RainbowText text="Julia Paulin" />
        </div>
      </header>
    </>
  );
};

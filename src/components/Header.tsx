import { RainbowText } from "./RainbowText";
import styles from "@/components/Header.module.css";
import { Navbar } from "./Navbar";

interface HeaderProps {
  text: string;
  titleText?: string;
}

export const Header = ({ text, titleText }: HeaderProps) => {
  return (
    <>
      <header>
        <div className={styles["hero-image"]}>
          <Navbar />
          <RainbowText text={text} />
          <p className={styles["title"]}>{titleText}</p>
        </div>
      </header>
    </>
  );
};

import { RainbowText } from "./RainbowText";
import styles from "@/components/Header.module.css";
import { Navbar } from "./Navbar";

export const Header = ({ text }: { text: string }) => {
  return (
    <>
      <header>
        <div className={styles["hero-image"]}>
          <Navbar />
          <RainbowText text={text} />
          <p className={styles["title"]}>Fullstack developer</p>
        </div>
      </header>
    </>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="socials"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles["email-icon"]} />
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles["linkedin-icon"]}
            onClick={() =>
              window.open("https://www.linkedin.com/in/julia-paulin/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            className={styles["github-icon"]}
            onClick={() =>
              window.open("https://github.com/PaulinJulia", "_blank")
            }
          />
        </div>
        <p className={styles["footer-text"]}>paulinjulia@gmail.com</p>
      </footer>
    </>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/Footer.module.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className={styles["footer-container"]}>
        <div
          className="socials"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles["email-icon"]}
            title="Email"
            onClick={() => navigate("/contact")}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles["linkedin-icon"]}
            title="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/julia-paulin/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            className={styles["github-icon"]}
            title="GitHub"
            onClick={() =>
              window.open("https://github.com/PaulinJulia", "_blank")
            }
          />
        </div>
        {/* <p className={styles["footer-text"]}>paulinjulia@gmail.com</p> */}
        <a
          href="mailto:paulinjulia@gmail.com"
          className={styles["footer-text"]}
        >
          paulinjulia@gmail.com
        </a>
      </footer>
    </>
  );
};

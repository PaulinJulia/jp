import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="socials"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              fontSize: "3rem",
              padding: "1rem",
            }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              fontSize: "3rem",
              padding: "1rem",
            }}
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              fontSize: "3rem",
              padding: "1rem",
            }}
          />
        </div>
        <p className="">paulinjulia@gmail.com</p>
      </footer>
    </>
  );
};

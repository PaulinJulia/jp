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
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer",
            }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/julia-paulin/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://github.com/PaulinJulia", "_blank")}
          />
        </div>
        <p
          style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
        >
          paulinjulia@gmail.com
        </p>
      </footer>
    </>
  );
};

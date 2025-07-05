import { ProjectItemProp } from "@/types/types";
import styles from "@/components/ProjectItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";

export const ProjectItem = ({
  project,
  onSelectedCard,
  onSelectedImage,
}: ProjectItemProp) => {
  return (
    <>
      <ul>
        <li className={styles["project-item"]}>
          <img
            src={project.image[0]}
            alt={project.title}
            className={styles["project-image"]}
            title={project.title}
            onClick={() => onSelectedImage(project.id)}
          />
          <p
            className={styles["project-description"]}
            onClick={() => onSelectedImage(project.id)}
          >
            {project.description}
          </p>
          <FontAwesomeIcon
            icon={faGithub}
            title={project.github}
            className={styles["github-icon"]}
            onClick={() => onSelectedCard(project.id)}
          />
          <div>
            {project.tech.map((tech) => (
              <a
                key={tech.id}
                href={tech.url || "/"}
                target="_blank"
                title={tech.name}
              >
                <Icon icon={tech.icon} className={styles["tech-icon"]} />
              </a>
            ))}
          </div>
        </li>
      </ul>
    </>
  );
};

import { ProjectItemProp } from "@/types/types";
import styles from "@/components/ProjectItem.module.css";

export const ProjectItem = ({ project, onSelected }: ProjectItemProp) => {
  return (
    <>
      <ul>
        <li
          onClick={() => onSelected(project.id)}
          className={styles["project-item"]}
        >
          <img
            src={project.image[0]}
            alt={project.title}
            className={styles["project-image"]}
            title={project.title}
          />
          <p className={styles["project-description"]}>{project.description}</p>
        </li>
      </ul>
    </>
  );
};

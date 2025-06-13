import { ProjectItemProp } from "@/types/types";
import styles from "@/components/ProjectItem.module.css";

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
          <p className={styles["project-description"]}>{project.description}</p>
          <p className={styles["github"]} onClick={() => onSelectedCard(project.id)}>Github</p>
        </li>
      </ul>
    </>
  );
};

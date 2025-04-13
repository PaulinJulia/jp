import { ProjectItemProp } from "@/types/types";
import styles from "@/components/ProjectItem.module.css";

export const ProjectItem = ({ project, onSelected }: ProjectItemProp) => {
  return (
    <>
      <ul>
        <li onClick={() => onSelected(project.id)} className={styles["project-item"]}>
          <p>{project.title}</p>
        </li>
      </ul>
    </>
  );
};

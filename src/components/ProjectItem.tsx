import { ProjectItemProp } from "../types/types";

export const ProjectItem = ({ project, onSelected }: ProjectItemProp) => {
  return (
    <>
      <ul>
        <li>
          <p>{project.title}</p>
          <button onClick={() => onSelected(project.id)}>Välj</button>
        </li>
      </ul>
    </>
  );
};

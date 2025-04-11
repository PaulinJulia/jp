import { ProjectItemProp } from "@/types/types";

export const ProjectItem = ({ project, onSelected }: ProjectItemProp) => {
  return (
    <>
      <ul>
        <li onClick={() => onSelected(project.id)}>
          <p>{project.title}</p>
        </li>
      </ul>
    </>
  );
};

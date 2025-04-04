export interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
}

export interface ProjectItemProp {
  project: Project;
  onSelected: (id: string) => void;
}

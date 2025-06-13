export interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
}

export interface ProjectItemProp {
  project: Project;
  onSelectedCard: (id: string) => void;
  onSelectedImage: (id: string) => void;
}

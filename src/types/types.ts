
export interface Tech {
  id: string;
  name: string;
  icon: string;
  color: string;
  url: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
  url: string;
  github: string;
  tech: Tech[];
}

export interface ProjectItemProp {
  project: Project;
  onSelectedCard: (id: string) => void;
  onSelectedImage: (id: string) => void;
}

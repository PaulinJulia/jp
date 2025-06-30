import projects from "@/api/projectsData.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/ProjectRoute.module.css";
import { Link } from "react-router-dom";

export const ProjectRoute = () => {
  const text = "Projects";
  const titleText = "For fun and learning";

  const handleSelectedImage = (projectId: string) => {
    const project = projects.find((project) => project.id === projectId);
    if (project && project.url) {
      window.open(project.url, "_blank");
    } else {
      console.error("URL not available for this project.");
    }
  };

  const handleSelectedCard = (projectId: string) => {
    const project = projects.find((project) => project.id === projectId);
    if (project && project.github) {
      window.open(project.github, "_blank");
    } else {
      console.error("URL not available for this project.");
    }
  };

  return (
    <>
      <Header text={text} titleText={titleText} />
      <main className={styles["project-container"]}>
        <article className={styles["project-text"]}>
          <h3>Welcome to My Projects</h3>
          <p className={styles["intro-text"]}>
            Explore my projects and skills.
          </p>
        </article>
        <article className={styles["project-article"]}>
          <ul className={styles["projects-list"]}>
            {projects.map((project) => {
              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onSelectedCard={handleSelectedCard}
                  onSelectedImage={handleSelectedImage}
                />
              );
            })}
          </ul>
        </article>
        <Link to="/contact" className={styles["contact-text"]}>
          For more information, please contact me.
        </Link>
      </main>
      <Footer />
    </>
  );
};

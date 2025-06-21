import projects from "@/api/projectsData.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/ProjectRoute.module.css";
import { useNavigate } from "react-router-dom";

export const ProjectRoute = () => {
  const text = "Projects";
  const titleText = "For fun and learning";
  const navigate = useNavigate();

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

  const handleContact = () => {
    navigate("/contact", { replace: true });
  };
  return (
    <>
      <Header text={text} titleText={titleText} />
      <main>
        <article className={styles["project-text"]}>
          <h1>Welcome to My Projects</h1>
          <p>Explore my projects and skills.</p>
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
          <p>
            <p
              className={styles["contact-text"]}
              onClick={() => handleContact()}
            >
              For more information, please contact me.
            </p>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

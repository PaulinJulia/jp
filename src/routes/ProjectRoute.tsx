import projects from "@/data.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/ProjectRoute.module.css";

export const ProjectRoute = () => {
  const text = "Projects";
  const titleText = "For fun and learning";
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
                  onSelected={() => {
                    if (project.url) {
                      window.open(project.url, "_blank");
                    } else {
                      console.error("URL not available for this project.");
                    }
                  }}
                />
              );
            })}
          </ul>
          <p>
            <p className={styles["contact-text"]}>
              For more information, please contact me.
            </p>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

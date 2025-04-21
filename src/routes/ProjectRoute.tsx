import projects from "@/data.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/ProjectRoute.module.css";

export const ProjectRoute = () => {
  const text = "My Projects!";
  return (
    <>
    <Header text={text} />
      <main>
        <section className={styles["project-section"]}>
          <ul>
            {projects.map((project) => {
              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onSelected={(id) => console.log(`Selected project ID: ${id}`)}
                />
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

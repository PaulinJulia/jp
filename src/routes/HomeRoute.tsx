import projects from "@/api/projectsData.json";
import tech from "@/api/techData.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/HomeRoute.module.css";
import { Icon } from "@iconify/react";

export const HomeRoute = () => {
  const text = "Julia Paulin";
  const titleText = "Full-stack Developer";

  return (
    <>
      <Header text={text} titleText={titleText} />
      <main>
        <section>
          <article className={styles["about-me"]}>
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my projects and skills.</p>
            <h3>About Me</h3>
            <p>
              I am a full-stack developer with a passion for creating dynamic
              and responsive web applications. I love coding and learning new
              technologies.
            </p>
          </article>
          <article className={styles["projects"]}>
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
          </article>
          <article>
            <h3 className={styles["tech-stack-title"]}>Tools & Technologies</h3>
            <ul className={styles["tech-stack-container"]}>
              {tech.map((tech) => (
                <li key={tech.id} className={styles["tech-stack"]}>
                  <span title={tech.name} aria-label={tech.name}>
                    <Icon
                      icon={tech.icon}
                      width="24"
                      height="24"
                      style={{ color: tech.color }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

import projects from "@/api/projectsData.json";
import tech from "@/api/techData.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/HomeRoute.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const HomeRoute = () => {
  const text = "Julia Paulin";
  const titleText = "Full Stack Developer";

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
      <main>
        <section>
          <article className={styles["welcome"]}>
            <h1 className={styles["welcome-text"]}>Welcome to My Portfolio</h1>
            <p className={styles["about-me-intro"]}>
              Developer with a passion for building clean, scalable and
              maintainable solutions that are easy to use. I love to
              collaborate, learn and create meaningful things both in code and
              beyond.
            </p>
            <Link to="/about" className={styles["contact-link"]}>
              More about me
            </Link>
          </article>
          <article className={styles["projects"]}>
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
          <article className={styles["tech-stack-wrapper"]}>
            <h3 className={styles["tech-stack-title"]}>Tools & Technologies</h3>
            <ul className={styles["tech-stack-container"]}>
              {tech.map((tech) => (
                <li key={tech.id} className={styles["tech-stack"]}>
                  <span
                    title={tech.name}
                    aria-label={tech.name}
                    onClick={() => window.open(tech.url, "_blank")}
                  >
                    <Icon
                      icon={tech.icon}
                      width="32"
                      height="32"
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

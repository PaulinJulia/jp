import projects from "@/api/projectsData.json";
import tech from "@/api/techData.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/HomeRoute.module.css";

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
            <ul>
              {tech.map((tech) => {
                return (
                  <li key={tech.id}>
                    <i className={tech.icon} style={{ color: "#F24E1E" }}></i>
                    {tech.name}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

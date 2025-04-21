import projects from "@/data.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/routes/HomeRoute.module.css";

export const HomeRoute = () => {
  const text = "Julia Paulin";
  return (
    <>
      <Header text={text} />
      <main>
        <section>
          <article className={styles["about-me"]}>
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my projects and skills.</p>
            <h2>About Me</h2>
            <p>
              I am a full-stack developer with a passion for creating dynamic
              and responsive web applications. I love coding and learning new
              technologies.
            </p>
          </article>
          <article className={styles["projects"]}>
            <ul>
              {projects.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    onSelected={(id) =>
                      console.log(`Selected project ID: ${id}`)
                    }
                  />
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

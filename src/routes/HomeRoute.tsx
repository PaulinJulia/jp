import projects from "../data.json";
import { ProjectItem } from "../components/ProjectItem";
import { Header } from "../components/Header";

export default function HomeRoute() {
  return (
    <>
      <Header />
      <main>
        <section>
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
      <footer>
        <p>paulinjulia@gmail.com</p>
        <div className="socials"></div>
      </footer>
    </>
  );
}

import projects from "@/data.json";
import { ProjectItem } from "@/components/ProjectItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const ProjectRoute = () => {
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
      <Footer />
    </>
  );
}

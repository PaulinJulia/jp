import projects from "../data.json";
import { ProjectItem } from "../components/ProjectItem";

export default function HomeRoute() {
  return (
    <main>
      <div id="error-page">
        <h1>Homepage</h1>
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
      </div>
    </main>
  );
}

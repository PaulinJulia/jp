import { useRouteError } from "react-router-dom";
// import projects from "../data.json"

export default function HomeRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Homepage</h1>
      <ul>
        {/* {(projects.map(projects) => { return (
            
        )})} */}
      </ul>
    </div>
  );
}

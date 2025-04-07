import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeRoute } from "./routes/HomeRoute";
import { ProjectRoute } from "./routes/ProjectRoute";
import RootRoute from "./routes/RootRoute";
import ErrorRoute from "./routes/ErrorRoute";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "projects",
        element: <ProjectRoute />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

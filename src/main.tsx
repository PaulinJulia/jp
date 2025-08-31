import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectRoute } from "./routes/ProjectRoute";
import RootRoute from "./routes/RootRoute";
import ErrorRoute from "./routes/ErrorRoute";
import { HomeRoute, AboutRoute, ContactRoute } from "@/routes/index";
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
        path: "about",
        element: <AboutRoute />,
      },
      {
        path: "projects",
        element: <ProjectRoute />,
      },
      // {
      //   path: "contact",
      //   element: <ContactRoute />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

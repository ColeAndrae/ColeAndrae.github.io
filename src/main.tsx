import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Home",
    element: <Home></Home>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Projects",
    element: <Projects></Projects>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

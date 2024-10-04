import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/react-portfolio/",
    element: <App />,
    children: [
      {
        path: "/react-portfolio/",
        element: <Home />,
      },
      {
        path: "/react-portfolio/about",
        element: <About />,
      },
      {
        path: "/react-portfolio/projects",
        element: <Projects />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from "react";
import '../../pages/pages_scss/projects.module.scss';
import ProjectsNavbar from "./ProjectsNavbar.jsx";
import ProjectsRouter from "./ProjectsRouter.jsx";

const Projects = () => {
  return (
    <div className="wrapper">
      {/* <ProjectsRF /> */}
      <ProjectsNavbar />
      <ProjectsRouter />
    </div>
  );
};

export default Projects;

import React from "react";
import map from "../../assets/pics/map.png"
import cl from "../pages/pages_scss/projects.module.scss"

const Projects = () => {
  return (
    <div className={cl.mapwrapper}>
      Projects
      <img className={cl.map} src={map} alt="map" />
    </div>
  );
};

export default Projects;

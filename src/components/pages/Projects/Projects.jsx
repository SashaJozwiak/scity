import React from "react";
import '../../pages/pages_scss/projects.module.scss';
import ProjectsNavbar from "./ProjectsNavbar.jsx";
import ProjectsRouter from "./ProjectsRouter.jsx";

import ProjectsCountry from "./ProjectsCountry.jsx";
import mapRF from "../../../assets/pics/RussianFederation.png";
import mapRB from "../../../assets/pics/RepublicBelarus3.png";
import mapRK from "../../../assets/pics/RepublicKazakhstan2.png";
import MapMarkersRF from "../../Map/MapMarkersRF.jsx";
import MapMarkersRB from "../../Map/MapMarkersRB.jsx";
import MapMarkersRU from "../../Map/MapMarkersRU.jsx";


const Projects = () => {
  return (
    <div className="wrapper">
      {/* <ProjectsNavbar />
      <ProjectsRouter /> */}
      <ProjectsCountry mapSrc={mapRF} MapMarkers={MapMarkersRF} />
      <ProjectsCountry mapSrc={mapRB} MapMarkers={MapMarkersRB} />
      <ProjectsCountry mapSrc={mapRK} MapMarkers={MapMarkersRU} />
    </div>
  );
};

export default Projects;

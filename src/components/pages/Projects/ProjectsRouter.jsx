import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProjectsCountry from "./ProjectsCountry.jsx";
import mapRF from "../../../assets/pics/RussianFederation.png";
import mapRB from "../../../assets/pics/RepublicBelarus3.png";
import mapRK from "../../../assets/pics/RepublicKazakhstan2.png";
import MapMarkersRF from "../../Map/MapMarkersRF.jsx";

const ProjectsRouter = () => {
  return (
    <Routes>
      <Route path="rf" element={<ProjectsCountry mapSrc={mapRF} MapMarkers={MapMarkersRF} />} />
      <Route path="rb" element={<ProjectsCountry mapSrc={mapRB} MapMarkers={MapMarkersRF} />} />
      <Route path="rk" element={<ProjectsCountry mapSrc={mapRK} MapMarkers={MapMarkersRF} />} />
      <Route path='*' element={< Navigate to='rf' />} />
    </Routes>
  );
};

export default ProjectsRouter;

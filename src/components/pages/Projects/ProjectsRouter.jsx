import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProjectsRF from "./pages/ProjectsRF.jsx";

const ProjectsRouter = () => {
  return (
    <Routes>
      <Route path="rf" element={<ProjectsRF />} />
      {/* <Route path="rb" element={<CorporationHistory />} />
      <Route path="rk" element={<CorporationAchivements />} /> */}
      <Route path='*' element={< Navigate to='rf' />} />
    </Routes>
  );
};

export default ProjectsRouter;

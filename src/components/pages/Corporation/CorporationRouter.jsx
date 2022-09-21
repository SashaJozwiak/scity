import React from "react";
import { Route, Routes } from "react-router-dom";
import CorporationAbout from "./pages/CorporationAbout.jsx";
import CorporationHistory from "./pages/CorporationHistory.jsx";
import CorporationAchivements from "./pages/CorporationAchivements.jsx";

const CorporationRouter = () => {
  return (
    <Routes>
      <Route path="about" element={<CorporationAbout />} />
      <Route path="history" element={<CorporationHistory />} />
      <Route path="achivements" element={<CorporationAchivements />} />
    </Routes>
  );
};

export default CorporationRouter;

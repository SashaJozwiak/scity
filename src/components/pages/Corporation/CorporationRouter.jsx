import React from "react";
import { Route, Routes } from "react-router-dom";
import CorporationAbout from "./pages/CorporationAbout.jsx";
import CorporationHistory from "./pages/CorporationHistory.jsx";
import CorporationAchivements from "./pages/CorporationAchivements.jsx";
import CorporationMain from "./pages/CorporationMain.jsx";

const CorporationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CorporationMain />} />
      <Route path="designing" element={<CorporationAbout />} />
      <Route path="production" element={<CorporationHistory />} />
      <Route path="montage" element={<CorporationAchivements />} />
    </Routes>
  );
};

export default CorporationRouter;

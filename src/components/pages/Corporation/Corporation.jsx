import React from "react";
import CorporationNavbar from "./CorporationNavbar.jsx";
import CorporationRouter from "./CorporationRouter.jsx";
import cl from "../pages_scss/corporation.module.scss";

const Corporation = () => {
  return (
    <div className={cl.corporation}>
      <CorporationNavbar />
      <CorporationRouter />
    </div>
  );
};

export default Corporation;

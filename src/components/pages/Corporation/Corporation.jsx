import React from "react";
import CorporationNavbar from "./CorporationNavbar.jsx";
import CorporationRouter from "./CorporationRouter.jsx";
import cl from "../pages_scss/corporation.module.scss";
import cl2 from "../../pages/pages_scss/corporationabout.module.scss";

const Corporation = () => {
  return (
    <div className={cl.corporation}>
      <CorporationNavbar />
      <CorporationRouter />
      
    </div>

  );
};

export default Corporation;

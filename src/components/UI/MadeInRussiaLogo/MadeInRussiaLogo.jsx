import React from "react";

import logo from "../../../assets/logo/logo_3.svg";
import cl from "./MadeInRussia.module.scss";

const MadeInRussiaLogo = () => {
  return (
    <img
      className={cl.logo}
      src={logo}
      alt={"logo"}
    />
  );
};

export default MadeInRussiaLogo;

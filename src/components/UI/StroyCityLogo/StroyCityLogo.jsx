import React from "react";
import logo from "../../../assets/logo/logo1_svg.svg";
import logo2 from "../../../assets/logo/logo2_svg.svg";
import cl from "./StroyCityLogo.module.scss";

const StroyCityLogo = () => {
  return (
    <div  className={cl.logos} >
      <a href="../">
      <img
        className={cl.logofont}
        src={logo}
        alt={"logo"}
      />
      <img
        className={cl.logback}
        src={logo2}
        alt={"logo"}
      />
      </a>
    </div>
  );
};

export default StroyCityLogo;
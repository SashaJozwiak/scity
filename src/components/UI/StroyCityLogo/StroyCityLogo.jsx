import React from "react";
import logo from "./logo1_svg.svg";
import logo2 from "./logo2_svg.svg";
import cl from "./StroyCityLogo.module.scss";

const StroyCityLogo = ({ navigator }) => {
  return (
    <div className={cl.logos} onClick={navigator}>
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
    </div>
  );
};

export default StroyCityLogo;
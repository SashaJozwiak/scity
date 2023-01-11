import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo1_svg.svg";
import logo2 from "../../../assets/logo/logo2_svg.svg";
import cl from "./StroyCityLogo.module.scss";

const StroyCityLogo = () => {
  const navigator = useNavigate();
  return (
    <div className={cl.logos} onClick={() => navigator("/")}>
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
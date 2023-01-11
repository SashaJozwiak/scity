import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo_3.svg";
import cl from "./MadeInRussia.module.scss";

const MadeInRussiaLogo = () => {
  const navigator = useNavigate();
  return (
    <img
      className={cl.logo}
      src={logo}
      alt={"logo"}
      onClick={() => navigator("/")}
    />
  );
};

export default MadeInRussiaLogo;

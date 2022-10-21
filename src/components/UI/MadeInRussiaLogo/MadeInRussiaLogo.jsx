import React from "react";
import logo from "./logo_3.svg";

const MadeInRussiaLogo = ({ navigator }) => {
  return (
    <img
      src={logo}
      alt={"logo"}
      onClick={navigator}
    />
  );
};

export default MadeInRussiaLogo;

import React from "react";
import cl from './MapButton.module.scss'

const MapButton = ({ city }) => {
  return (
    <button className={cl.MapButton}>
      <h2 className={cl.MapButtonCityName}>{city}</h2>
    </button >
  );
};

export default MapButton;

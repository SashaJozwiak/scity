import React from "react";
import cl from './MapButton.module.scss'

const MapButton = ({ city, top, left, setActive }) => {
  return (
    <button
      onClick={(e) => { setActive(true) }}
      style={{ top, left }}
      className={cl.MapButton}
    >
      <h2 className={cl.MapButtonCityName}>{city}</h2>
    </button >
  );
};

export default MapButton;

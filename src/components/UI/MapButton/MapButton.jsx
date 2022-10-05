import React from "react";
import cl from './MapButton.module.scss'

const MapButton = ({ city, top, left, content, setActive, setContent }) => {
  return (
    <button
      onClick={(e) => {
        setActive(true);
        setContent(content)
      }}
      style={{ top, left }}
      className={cl.MapButton}
    >
      <h2 className={cl.MapButtonCityName}>{city}</h2>
    </button >
  );
};

export default MapButton;

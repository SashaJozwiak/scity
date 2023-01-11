import React from "react";
import cl from './MapButton.module.scss'

const MapButton = ({ style, city, top, left, content, setActive, setContent }) => {
  console.log(style)
  return (
    <button
      onClick={(e) => {
        setActive(true);
        setContent(content)
      }}
      style={{ top, left }}
      className={style == 'blue' ? cl.MapButton : cl.MapButton2}
    >
      <h2 className={cl.MapButtonCityName}>{city}</h2>
    </button >
  );
};

export default MapButton;

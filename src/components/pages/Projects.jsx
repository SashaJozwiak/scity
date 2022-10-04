import React, { useState } from "react";
import Map from "../Map/Map.jsx";
import MapButton from "../UI/MapButton/MapButton.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import MapMarkers from "../Map/MapMarkers.js";

const Projects = () => {
  const [modalWindowActive, setModalWindowActive] = useState(false);
  return (
    <div>
      <Map>
        {
          MapMarkers.map((button) =>
            <MapButton
              setActive={setModalWindowActive}
              key={button.city}
              city={button.city}
              top={button.top}
              left={button.left}
            />)
        }
      </Map>
      <ModalWindow
        isActive={modalWindowActive}
        setActive={setModalWindowActive}
      />
    </div>
  );
};

export default Projects;

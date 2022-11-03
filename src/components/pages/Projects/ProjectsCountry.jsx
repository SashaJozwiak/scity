import React, { useState } from "react";
import MapButton from "../../UI/MapButton/MapButton.jsx";
import ModalWindow from "../../ModalWindow/ModalWindow.jsx"
import Map from "../../Map/Map.jsx";

const ProjectsCountry = ({ mapSrc, MapMarkers }) => {
  const [modalWindowActive, setModalWindowActive] = useState(false);
  const [content, setContent] = useState(null);
  
  return (
    <div className="wrapper">
      <Map mapSrc={mapSrc}>
        {
          MapMarkers.map((button) => {
            return <MapButton
              style={button.style}
              setActive={setModalWindowActive}
              setContent={setContent}
              key={button.city}
              city={button.city}
              top={button.top}
              left={button.left}
              content={button.content}
            />
          }
          )
        }
      </Map>
      <ModalWindow
        isActive={modalWindowActive}
        setActive={setModalWindowActive}
        content={content}
      />
    </div>
  )
}

export default ProjectsCountry;

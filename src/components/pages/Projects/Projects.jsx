import React, { useState } from "react";
import Map from "../../Map/Map.jsx";
import MapButton from "../../UI/MapButton/MapButton.jsx";
import ModalWindow from "../../ModalWindow/ModalWindow.jsx";
import MapMarkers from "../../Map/MapMarkers.jsx";
import '../../pages/pages_scss/projects.module.scss';

const Projects = () => {
  const [modalWindowActive, setModalWindowActive] = useState(false);
  const [content, setContent] = useState(null);
  return (
    <div className="wrapper">
      <Map>
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
  );
};

export default Projects;

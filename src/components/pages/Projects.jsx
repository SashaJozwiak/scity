import React from "react";
import map from "../../assets/pics/map.png"
import Moscow from "../pages/Project/modalwindows/moscow.jsx"

import cl from "../pages/pages_scss/projects.module.scss"
import "../pages/Project/modalwindows/modals.module.scss"

const Projects = () => {
  return (
    <div className={cl.mapwrapper}>
      <Moscow/>
      <button onClick={
        document.querySelector(".modal")?.classList.add('active') 
      }>Открыть модальное окно</button>  {/* по адресу Project/modalwindows/modals.module.scss есть класс .modal, в нем есть свойство opacity, значение которого нужно сменить с 0 на 1 , либо добавить класс "active" как в примере выше по onClick*/}
      <img className={cl.map} src={map} alt="map" />
    </div>
  );
};

export default Projects;

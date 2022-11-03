import React from "react";
import StroyCityLogo from "../../components/UI/StroyCityLogo/StroyCityLogo.jsx"
import Corporation from "./Corporation/Corporation.jsx";


import CorporationAbout from "./Corporation/pages/CorporationAbout.jsx";
import CorporationHistory from "./Corporation/pages/CorporationHistory.jsx";
import CorporationAchivements from "./Corporation/pages/CorporationAchivements.jsx";

import Projects from "./Projects/Projects.jsx";
import ProjectsCountry from "./Projects/ProjectsCountry.jsx";
import Map from "../Map/Map.jsx";
import MapButton from "../UI/MapButton/MapButton.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

import Partners from "./Partners.jsx";
import Contacts from "./Contacts.jsx";

import Footer from "./footer.jsx";






import "./pages_scss/main.scss"
import cl from "./main.module.scss";





const Main = () => {
  return (
    <div className="wrapper">

      <div className="main-wrapper">
        <div className="background">
          <div className="transparent">стройсити  <br /> <p className="subtitle">несущие системы</p></div>
        </div>
        <div className="corporation">
          <div className={cl.corporationabout}>
            <div className={cl.project_one}>
              <h1 className={cl.transparent}>
                Реализуем самые сложные проекты  и нестандартные решения
              </h1>

            </div>
          </div>
        </div>

        <div className="arrow8">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>





      <div id="1" className="company-activity">
        <CorporationAbout/>
        <CorporationHistory/>
        <CorporationAchivements/>
      </div>

      <div id="2" className="projects">
         <Projects/>
      </div>


      <div id="3" className="partners">
        <Partners />
      </div>



      <div>
        <Contacts />
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
};


export default Main;

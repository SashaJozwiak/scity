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
import Carousel from "../Carousel/Carousel.jsx";
import mapRF from "../../assets/pics/RussianFederation.png";
import mapRB from "../../assets/pics/RepublicBelarus3.png";
import mapRK from "../../assets/pics/RepublicKazakhstan2.png";
import MapMarkersRF from "../Map/MapMarkersRF.jsx";
import MapMarkersRB from "../Map/MapMarkersRB.jsx";
import MapMarkersRU from "../Map/MapMarkersRU.jsx";

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

      {/* <div id="1" className="company-activity">
        <CorporationAbout />
        <CorporationHistory />
        <CorporationAchivements />
      </div> */}
      <Carousel
        id={'1'}
        firstCadr={<CorporationAbout />}
        secondCadr={<CorporationHistory />}
        thirdCadr={<CorporationAchivements />}
        firstCadrName={'О Нас'}
        secondCadrName={'История'}
        thirdCadrName={'Достижения'}
      />

      <Carousel
        id={'2'}
        firstCadr={<ProjectsCountry mapSrc={mapRF} MapMarkers={MapMarkersRF} />}
        secondCadr={<ProjectsCountry mapSrc={mapRB} MapMarkers={MapMarkersRB} />}
        thirdCadr={<ProjectsCountry mapSrc={mapRK} MapMarkers={MapMarkersRU} />}
        firstCadrName={'Россия'}
        secondCadrName={'Беларусь'}
        thirdCadrName={'Узбекистан'}
      />

      <div id="3" className="partners">
        <Partners />
      </div>

      <div>
        <Contacts />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};


export default Main;

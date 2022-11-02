import React from "react";
import StroyCityLogo from "../../components/UI/StroyCityLogo/StroyCityLogo.jsx"
import Corporation from "./Corporation/Corporation.jsx";
/* import CorporationMain from "./Corporation/pages/CorporationMain.jsx";
import CorporationNavbar from "./Corporation/CorporationNavbar.jsx";
import CorporationRouter from "./Corporation/CorporationRouter.jsx"; */
import Projects from "./Projects/Projects.jsx";
import Partners from "./Partners.jsx";
import Contacts from "./Contacts.jsx";
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
      </div>

      {/* <div>
        <Corporation />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Partners />
      </div>

      <div>
        <Contacts />
      </div> */}

    </div>
  );
};

export default Main;
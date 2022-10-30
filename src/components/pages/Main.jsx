import React from "react";
import StroyCityLogo from "../../components/UI/StroyCityLogo/StroyCityLogo.jsx"

import "./pages_scss/main.scss"
import cl from "./main.module.scss";


const Main = () => {
  return (
    <div>
      

    <div className="background">
        <div className="transparent">стройсити  <br /> <p className="subtitle">несущие системы</p></div>
    </div>

    <div className="corporation">

    

      <div className={cl.corporationabout}>
        <div className={cl.project_one}>
          <h1 className={cl.transparent}>
            {/* <span className={cl2.transparent2}>СТРОЙСИТИ</span> */}
            Реализуем самые сложные проекты  и нестандартные решения
          </h1>
          {/* <img className={cl.logo} src={logo} alt="logo_stroycity" /> */}
          {/* <h3 className={cl.title}>Реализуем самые сложные проекты  и нестандартные решения</h3> */}

        </div>
        </div>
        </div>
        </div> 
  );
};

export default Main;
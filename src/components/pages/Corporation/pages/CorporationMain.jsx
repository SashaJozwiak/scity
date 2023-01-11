import React from "react";
import logo from "../../../../assets/logo/logo_sc.svg"
import cl from "../../pages_scss/corporationmain.module.scss";
import cl2 from "../../pages_scss/corporationabout.module.scss";




const CorporationMain = () => {
    return (
        <div className={cl.corporationabout}>
        <div className={cl2.project_one}>
          <h1 className={cl2.transparent}>
            <span className={cl2.transparent2}>СТРОЙСИТИ</span>
          ПРОЕКТИРОВАНИЕ, ПРОИЗВОДСТВО  И МОНТАЖ СВЕТОПРОЗРАЧНЫХ  КОНСТРУКЦИЙ
          </h1>
          {/* <img className={cl.logo} src={logo} alt="logo_stroycity" /> */}
          {/* <h3 className={cl.title}>Реализуем самые сложные проекты  и нестандартные решения</h3> */}

        </div>
        </div>
    )
    }

export default CorporationMain;
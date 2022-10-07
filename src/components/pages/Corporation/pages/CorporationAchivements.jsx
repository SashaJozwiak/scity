import React from "react";
import pic1 from "../../../../assets/pics/montazh.jpg"
import pic2 from "../../../../assets/pics/montazh2.jpg"

import cl from "../../pages_scss/corporationabout.module.scss";

const CorporationAchivements = () => {
  return (
  <div className={cl.corporationabout}>
    

      <div className={cl.project_one}>
        <h1 className={cl.title}>полный цикл монтажных работ с предварительной контрольной сборкой конструкций на наших производственных площадях</h1>
        
        <img className={cl.imgone} src={pic1} alt="montazh pic one" />
      </div>


      <div className={cl.project_one}>
        <h1 className={cl.title}>Выполним монтаж собственными силами либо организуем шеф-монтаж на всех этапах работ</h1>
        
        <img className={cl.imgone} src={pic2} alt="montazh pic two" />
      </div>
      


  </div>
  );
};

export default CorporationAchivements;

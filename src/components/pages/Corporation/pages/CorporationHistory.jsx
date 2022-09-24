import React from "react";
import pic1 from "../../../../assets/pics/production_1.jpg"
import pic2 from "../../../../assets/pics/production_for_transparent.png"
import pic3 from "../../../../assets/pics/sertpic.jpg"

import cl from "../../pages_scss/corporationabout.module.scss";

const CorporationHistory = () => {
  return (
<div className={cl.corporationabout}>
    <div className={cl.project_one}>
        <h1 className={cl.title}>Производственная площадка, г. Новосибирск</h1>
        
        <img className={cl.imgone} src={pic1} alt="production in novosivirsk" />
    </div>

    <div className={cl.project_one}>
        <h1 className={cl.title}>Высокотехнологичные 5-ти осевые обрабатывающие центры</h1>
        
        <img className={cl.imgone} src={pic2} alt="production in novosivirsk equipment" />
    </div>

    <div className={cl.project_one}>
        <h1 className={cl.title}>Пройдены все необходимые сертификационные испытания как в России, так и в Европе</h1>
        <ul>
          <li>Общие расчетные принципы в ЦНИИСК имени В.А. Кучеренко.</li>
          <li>Сертификат ГОСТ Р ИСО 9001-2015, патент на полезную модель.</li>
          <li>Сертификация на предел огнестойкости RE15, RE 30 по ГОСТ Р 53308-2009.</li>
          <li>Сертификационные испытания (НИИСФ РААСН, ift Rosenheim GmbH)</li>
        </ul>
        
        <img className={cl.imgone} src={pic3} alt="production in novosivirsk equipment" />
    </div>

</div>
  );
};

export default CorporationHistory;

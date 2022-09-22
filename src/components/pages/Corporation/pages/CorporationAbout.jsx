import React from "react";
import pic1 from "../../../../assets/pics/project_1.jpg"

import pic2 from "../../../../assets/pics/project_2-1.jpg"
import pic3 from "../../../../assets/pics/project_2-2.jpg"
import pic4 from "../../../../assets/pics/project_2-3.jpg"

import pic5 from "../../../../assets/pics/project_3-1.jpg"
import pic6 from "../../../../assets/pics/project_3-2.jpg"
import pic7 from "../../../../assets/pics/project_3-3.jpg"
import pic8 from "../../../../assets/pics/project_3-4.jpg"

import cl from "../../pages_scss/corporationabout.module.scss";

const CorporationAbout = () => {
  return (
    <div className={cl.corporationabout}>

      <div className={cl.project_one}>
        <h1 className={cl.title}>Построение модели сетчатой оболочки в программном комплексе</h1>
        <ul>
          <li>Возможность быстро изменять геометрические параметры конструкции.</li>
          <li>Возможность изменения типов материалов и нагрузок.</li>
          <li>Возможность максимально воплощать желания Заказчика и замыслы архитектора в проектируемых конструкциях.</li>
        </ul>
        
        <img className={cl.imgone} src={pic1} alt="editing project one" />
      </div>

      <div className={cl.project_one}>
        <h1 className={cl.title}>Построение твердотельной конструкции модели оболочки</h1>
          <div className={cl.listimg}>
            <ul>
              <li>Визуализация полученного результата с привязкой к объекту.</li>
              <li>Автоматизированная выгрузка задания для производства.</li>
              <li>Статические и теплотехнические расчеты по выбранной форме.</li>
            </ul>

            <img className={cl.imgtwo} src={pic2} alt="editing project two" />
          </div>

          <img className={cl.imgfour} src={pic4} alt="editing project four" />
          <img className={cl.imgthree} src={pic3} alt="editing project three" />
      </div>

      <div className={cl.project_one}>
        <h1 className={cl.title}>Автоматизированная интеграция модели в программный комплекс для станков с ЧПУ</h1>
          <div className={cl.listimgtwo}>

            <img className={cl.imgpartthree} src={pic5} alt="editing project five" />
            <img className={cl.imgpartthree} src={pic6} alt="editing project six" />
            <img className={cl.imgpartthree} src={pic7} alt="editing project seven" />
            <img className={cl.imgpartthree} src={pic8} alt="editing project eight" />

          </div>


      </div>





    </div>
  );
};

export default CorporationAbout;

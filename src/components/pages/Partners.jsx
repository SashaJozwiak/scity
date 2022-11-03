import React from "react";
import Gazprom from '../../assets/partners/gazprom2.jpg';
import Stis from '../../assets/partners/stis1.jpg';
import Lukoil from '../../assets/partners/lukoil1.jpg';
import Nesu from '../../assets/partners/nesu1.jpg';
import AGC from '../../assets/partners/agc1.jpg';
import '../pages/pages_scss/partners.scss';
import cl from './Partners.module.scss';

const Partners = () => {
  return (
    <div className={cl.wrapper}>

      <div className={cl.scene}>

        <div className={cl.card}>
          <div className={cl.face}>
            <img className={cl.logo} src={Stis} />
          </div>
          <div className={`${cl.face} ${cl.faceback}`}>
            <div className={cl.backtext}>
              <h1 className={cl.titletext}>ООО «Группа компаний «Стис»»</h1>
              <p>Партнер является признанным лидером в сфере производства стеклопакетов в России и странах СНГ. Компания поставляет свою продукцию в 43 страны мира и 30 регионов России. На территории России работает 10 заводов.</p>
            </div>
          </div>
        </div>

        <div className={cl.card}>
          <div className={cl.face}>
            <img className={cl.logo} src={Lukoil} />
          </div>
          <div className={`${cl.face} ${cl.faceback}`}>
            <div className={cl.backtext}>
              <h1 className={cl.titletext}>ООО «ЛУКОЙЛ-Западная Сибирь»</h1>
              <p>Добывает около 40% углеводородов Группы «ЛУКОЙЛ». Предприятие работает на территории Тюменской области, Ханты-Мансийского автономного округа-Югры, Ямало-Ненецкого автономного округа.</p>
            </div>
          </div>
        </div>

        <div className={cl.card}>
          <div className={cl.face}>
            <img className={cl.logo} src={Nesu} />
          </div>
          <div className={`${cl.face} ${cl.faceback}`}>
            <div className={cl.backtext}>
              <h1 className={cl.titletext}>ООО "НЕСУЩИЕ СИСТЕМЫ"</h1>
              <p>компания, расширяющая архитектурные возможности, предоставляя технологические решения для реализации оболочек купольных систем и мостовых конструкций свободной формы.</p>
            </div>
          </div>
        </div>

        <div className={cl.card}>
          <div className={cl.face}>
            <img className={cl.logo} src={AGC} />
          </div>
          <div className={`${cl.face} ${cl.faceback}`}>
            <div className={cl.backtext}>
              <h1 className={cl.titletext}>AGC Glass Russia</h1>
              <p>Мировой лидер в производстве стекла для архитектурно-строительного и автомобильного применения. AGC Glass Russia входит в состав компании AGC Glass Europe – европейского подразделения AGC Inc. – крупнейшего производителя листового стекла в мире.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Partners;

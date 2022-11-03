import React from "react";

import Gazprom from '../../assets/partners/gazprom2.jpg'
import Stis from '../../assets/partners/stis1.jpg'
import Lukoil from '../../assets/partners/lukoil1.jpg'
import Nesu from '../../assets/partners/nesu1.jpg'
import AGC from '../../assets/partners/agc1.jpg'


import '../pages/pages_scss/partners.scss'

const Partners = () => {
  return (
    <div className="wrapper">
      {/* <div className="background">
        <div className="transparent">стройсити  <br /> <p className="subtitle">несущие системы</p></div>
      </div> */}
    
        <div className="scene">
          <div className="card">
              <div className="card__face card__face--front">
                <img className="logo" src={Stis}/* "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" */ />
              </div>
              <div className="card__face card__faceback">
                {/* <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" /> */}
                <div className="backtext">
                  <h1 className="titletext">ООО «Группа компаний «Стис»»</h1>
                  <p>Партнер является признанным лидером в сфере производства стеклопакетов в России и странах СНГ. Компания поставляет свою продукцию в 43 страны мира и 30 регионов России. На территории России работает 10 заводов.</p>
                </div>
          </div>
        </div>


  <div className="card">
    <div className="card__face card__face--front">
      <img className="logo" src={Lukoil} /* "https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" */ />
      
    </div>
    <div className="card__face card__face--back">
      {/* <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" /> */}
      <div className="backtext">
        <h1 className="titletext">ООО «ЛУКОЙЛ-Западная Сибирь»</h1>
        <p>Добывает около 40% углеводородов Группы «ЛУКОЙЛ». Предприятие работает на территории Тюменской области, Ханты-Мансийского автономного округа-Югры, Ямало-Ненецкого автономного округа.</p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__face card__face--front">
    <img className="logo" src={Nesu} /* "https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" */ />
    </div>
    <div className="card__face card__face--back">
      {/* <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" /> */}
      <div className="backtext">
        <h1 className="titletext">ООО "НЕСУЩИЕ СИСТЕМЫ"</h1>
        <p>компания, расширяющая архитектурные возможности, предоставляя технологические решения для реализации оболочек купольных систем и мостовых конструкций свободной формы.</p>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card__face card__face--front">
      <img className="logo" src={AGC} /* "https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" */ />
    </div>
    <div className="card__face card__face--back">
      {/* <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" /> */}
      <div className="backtext">
        <h1 className="titletext">AGC Glass Russia</h1>
        <p>Мировой лидер в производстве стекла для архитектурно-строительного и автомобильного применения. AGC Glass Russia входит в состав компании AGC Glass Europe – европейского подразделения AGC Inc. – крупнейшего производителя листового стекла в мире.</p>
      </div>
    </div>
  </div>

  {/* <div className="card">
    <div className="card__face card__face--front">
    <img className="logo" src={Gazprom} "https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" />
    </div>
    <div className="card__face card__face--back">
      <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" />
      <div className="backtext">
        <h1 className="titletext">Газпром</h1>
        <p>Глобальная энергетическая компания. Основные направления деятельности — геологоразведка, добыча, транспортировка, хранение, переработка и реализация газа, газового конденсата и нефти, реализация газа в качестве моторного топлива, а также производство и сбыт тепло- и электроэнергии.</p>
      </div>
    </div>
  </div> */}
      </div>
    </div>
  );
};

export default Partners;

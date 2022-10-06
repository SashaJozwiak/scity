import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";

const MapMarkers = [
  {
    city: 'Москва',
    top: '44.5%',
    left: '12.2%',
    content: <ModalWindowContent city={'Москва'} 
    text={'«Стеклянная Кора», Парк Зарядье, г. Москва  Объем работ: 8700 кв.м. Проектирование и изготовление'} 
    img={'../../assets/project-photo/moscow/project1.jpg'} />
  },
 /*  {
    city: 'CПб',
    top: '31.4%',
    left: '12.7%',
    content: <ModalWindowContent city={'Санкт-Петербург'} text={'Еще один замечательный город'} />
  }, */
];

export default MapMarkers;

import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";
import ModalWindowProject from "../ModalWindow/ModalWindowProject.jsx";
import MoscowImg from '../../assets/project-photo/moscow/project1.jpg';

const MapMarkers = [
  {
    city: 'Москва',
    top: '44.5%',
    left: '12.2%',
    content: <ModalWindowContent city={'Москва'}>
      <ModalWindowProject
        text={'«Стеклянная Кора», Парк Зарядье, г. Москва  Объем работ: 8700 кв.м. Проектирование и изготовление'}
        img={MoscowImg}
      />
      <ModalWindowProject
        text={'«Стеклянная Кора», Парк Зарядье, г. Москва  Объем работ: 8700 кв.м. Проектирование и изготовление'}
        img={MoscowImg}
      />
    </ModalWindowContent>
  },
  {
    city: 'CПб',
    top: '31.4%',
    left: '12.7%',
    content: <ModalWindowContent city={'Санкт-Петербург'} >
      <ModalWindowProject
        text={'Еще один замечательный город'}
        img={''}
      />
    </ModalWindowContent>
  },
];

export default MapMarkers;

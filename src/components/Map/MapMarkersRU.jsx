import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";
import ModalWindowProject from "../ModalWindow/ModalWindowProject.jsx";

import MoscowImg from '../../assets/project-photo/moscow/project1.jpg';
import MoscowImg2 from '../../assets/project-photo/moscow/project2.jpg';
import MoscowImg3 from '../../assets/project-photo/moscow/project3.jpg';
import MoscowImg4 from '../../assets/project-photo/moscow/project4.jpg';
import MoscowImg5 from '../../assets/project-photo/moscow/project5.jpg';
import MoscowImg6 from '../../assets/project-photo/moscow/project6.jpg';

import Amirsoi from '../../assets/project-photo/RU/Amirsoi.jpg';

import Ekb from '../../assets/project-photo/Ekb/project1.jpg';
import Ekb2 from '../../assets/project-photo/Ekb/project2.jpg';
import SPb from '../../assets/project-photo/petersburg/project1.jpg';
import Nvsk from '../../assets/project-photo/novosibirsk/project1.jpg';

const MapMarkersRB = [
  {
    style: 'blue',
    city: 'Амирсой',
    top: '60.5%',
    left: '64.2%',
    content: <ModalWindowContent city={'Амирсой'}>
      <ModalWindowProject
        text={'Горнолыжный курорт. Проектирование и изготовление'}
        img={Amirsoi}
      />
    </ModalWindowContent>
  },
  {
    style: 'red',
    city: 'Ташкент',
    top: '63.5%',
    left: '63.2%',
    content: <ModalWindowContent city={'Ташкент'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },
];

export default MapMarkersRB;

import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";
import ModalWindowProject from "../ModalWindow/ModalWindowProject.jsx";

import MoscowImg from '../../assets/project-photo/moscow/project1.jpg';
import MoscowImg2 from '../../assets/project-photo/moscow/project2.jpg';
import MoscowImg3 from '../../assets/project-photo/moscow/project3.jpg';
import MoscowImg4 from '../../assets/project-photo/moscow/project4.jpg';
import MoscowImg5 from '../../assets/project-photo/moscow/project5.jpg';
import MoscowImg6 from '../../assets/project-photo/moscow/project6.jpg';

import Grodno1 from '../../assets/project-photo/RB/Grodno1.jpg';

import Ekb from '../../assets/project-photo/Ekb/project1.jpg';
import Ekb2 from '../../assets/project-photo/Ekb/project2.jpg';
import SPb from '../../assets/project-photo/petersburg/project1.jpg';
import Nvsk from '../../assets/project-photo/novosibirsk/project1.jpg';

const MapMarkersRB = [
  {
    style: 'blue',
    city: 'Гродно',
    top: '55.5%',
    left: '25.2%',
    content: <ModalWindowContent city={'Гродно'}>
      <ModalWindowProject
        text={'ТРЦ Triniti. Проектирование, изготовление и монтаж'}
        img={Grodno1}
      />
    </ModalWindowContent>
  },
  {
    style: 'red',
    city: 'Минск',
    top: '54.7%',
    left: '44.4%',
    content: <ModalWindowContent city={'Минск'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },
];

export default MapMarkersRB;

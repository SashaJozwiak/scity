import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";
import ModalWindowProject from "../ModalWindow/ModalWindowProject.jsx";

import MoscowImg from '../../assets/project-photo/moscow/project1.jpg';
import MoscowImg2 from '../../assets/project-photo/moscow/project2.jpg';
import MoscowImg3 from '../../assets/project-photo/moscow/project3.jpg';
import MoscowImg4 from '../../assets/project-photo/moscow/project4.jpg';
import MoscowImg5 from '../../assets/project-photo/moscow/project5.jpg';
import MoscowImg6 from '../../assets/project-photo/moscow/project6.jpg';

import Ekb from '../../assets/project-photo/Ekb/project1.jpg';
import Ekb2 from '../../assets/project-photo/Ekb/project2.jpg';
import SPb from '../../assets/project-photo/petersburg/project1.jpg';
import Nvsk from '../../assets/project-photo/novosibirsk/project1.jpg';

const MapMarkersRF = [
  {
    style: 'blue',
    city: 'Москва',
    top: '44.5%',
    left: '12.2%',
    content: <ModalWindowContent city={'Москва'}>
      <ModalWindowProject
        text={'«СТЕКЛЯННАЯ КОРА», Парк Зарядье, Объем работ: 8700 кв.м. Проектирование и изготовление'}
        img={MoscowImg}
      />
      <ModalWindowProject
        text={'ГЛАВНЫЙ ХРАМ ВС РФ, парк Патриот, МО, г. Кубинка. Объем работ: 4000 кв.м. Проектирование и изготовление'}
        img={MoscowImg2}
      />
      <ModalWindowProject
        text={'Гостиница «FAIRMONT VESPER RESIDENCES» Проектирование, изготовление и монтаж'}
        img={MoscowImg3}
      />
      <ModalWindowProject
        text={'ЕДЦ Московского метрополитена, Проектирование, изготовление и монтаж'}
        img={MoscowImg4}
      />
      <ModalWindowProject
        text={'Гостиница StandArt, Проектирование, изготовление и монтаж'}
        img={MoscowImg5}
      />
      <ModalWindowProject
        text={'Деловой центр, МО, Макиниская пойма, 65-66 км. МКАД. Проектирование и изготовление'}
        img={MoscowImg6}
      />
    </ModalWindowContent>
  },
  {
    style: 'blue',
    city: 'Санкт-Петербург',
    top: '31.4%',
    left: '12.7%',
    content: <ModalWindowContent city={'Санкт-Петербург'} >
      <ModalWindowProject
        text={'Спортивно-развлекательный комплекс «ИГОРА ДРАЙВ», Проектирование и изготовление'}
        img={SPb}
      />
    </ModalWindowContent>
  },
  {
    style: 'blue',
    city: 'Екатеринбург',
    top: '60.5%',
    left: '27.5%',
    content: <ModalWindowContent city={'Екатеринбург'} >
      <ModalWindowProject
        text={'ТРЦ Веер Молл, Объем работ: 36 000 кв.м. Проектирование, изготовление и монтаж'}
        img={Ekb2}
        
      />
      <ModalWindowProject
        //text={'ТРЦ Веер Молл'}
        img={Ekb}
      />
    </ModalWindowContent>
    
  },
  {
    style: 'blue',
    city: 'Новосибирск',
    top: '69.5%',
    left: '43.5%',
    content: <ModalWindowContent city={'Новосибирск'} >
      <ModalWindowProject
        text={'Биотехнопарк, г. Кольцово. Проектирование и изготовление'}
        img={Nvsk}
        
      />
    </ModalWindowContent>
    
  },
  {
    style: 'blue',
    city: 'Воронеж',
    top: '54.5%',
    left: '8.5%',
    content: <ModalWindowContent city={'Воронеж'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },
  {
    style: 'red',
    city: 'Красноярск',
    top: '64%',
    left: '48%',
    content: <ModalWindowContent city={'Красноярск'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
      </ModalWindowContent>
  },
  {
    style: 'blue',
    city: 'Краснодар',
    top: '62%',
    left: '4%',
    content: <ModalWindowContent city={'Краснодар'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
      </ModalWindowContent>
  },

  {
    style: 'blue',
    city: 'Калининград',
    top: '29%',
    left: '3%',
    content: <ModalWindowContent city={'Калининград'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
      </ModalWindowContent>
  },


  {
    style: 'blue',
    city: 'Крым',
    top: '56.5%',
    left: '0.4%',
    content: <ModalWindowContent city={'Крым'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },

  {
    style: 'red',
    city: 'Клин',
    top: '42.5%',
    left: '11.4%',
    content: <ModalWindowContent city={'Клин'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },

  {
    style: 'red',
    city: 'Владимир',
    top: '40.5%',
    left: '16.2%',
    content: <ModalWindowContent city={'Владимир'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },

  {
    style: 'red',
    city: 'Калуга',
    top: '48.7%',
    left: '10.4%',
    content: <ModalWindowContent city={'Калуга'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },
  {
    style: 'blue',
    city: 'Кемерово',
    top: '75%',
    left: '43.7%',
    content: <ModalWindowContent city={'Кемерово'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },

  {
    style: 'blue',
    city: 'Владивосток',
    top: '96%',
    left: '82.1%',
    content: <ModalWindowContent city={'Владивосток'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },

  {
    style: 'blue',
    city: 'П.-Камчатский',
    top: '61%',
    left: '95.1%',
    content: <ModalWindowContent city={'Петропавловск-Камчатский'} >
      <ModalWindowProject
        text={'project text'}
        img={''}
        
      />
    </ModalWindowContent>
    
  },
];

export default MapMarkersRF;

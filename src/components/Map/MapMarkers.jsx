import React from "react";
import ModalWindowContent from "../ModalWindow/ModalWidnowContent.jsx";

const MapMarkers = [
  {
    city: 'Москва',
    top: '44.5%',
    left: '12.2%',
    content: <ModalWindowContent city={'Москва'} text={'Замечательынй город'} />
  },
  {
    city: 'Санкт-Петербург',
    top: '31.4%',
    left: '12.7%',
    content: <ModalWindowContent city={'Санкт-Петербург'} text={'Еще один замечательный город'} />
  },
];

export default MapMarkers;
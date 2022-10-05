import React from "react";
import cl from './ModalWindowContent.scss';
import image from '../../assets/pics/component-map.png';

const ModalWindowContent = ({ city, text }) => {
  return (
    <div>
      <h1 className='content-title'>{city}</h1>
      <p className='content-text'>{text}</p>
      <img src={image} alt="just image" width={'100px'} height={'100px'} />
    </div>
  );
};

export default ModalWindowContent;
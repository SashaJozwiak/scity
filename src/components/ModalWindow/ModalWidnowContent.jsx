import React from "react";
import imageMoscowOne from '../../assets/project-photo/moscow/project1.jpg';

import cl from './ModalWindowContent.scss';
import './ModalWindowContent.scss';

const ModalWindowContent = ({ city, text, img }) => {
  return (
    <div>
      <h1 className='content-title'>{city}</h1>
      <div className="project">
        <p className='content-text'>{text}</p>
        <img src={img} className='project-photo' alt="project image" width={'100%'} height={'100%'} />
      </div>
    </div>


  );
};

export default ModalWindowContent;
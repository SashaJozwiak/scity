import React from "react";
import './ModalWindowContent.scss';

const ModalWindowProject = ({ text, img }) => {
  return (
    <div className="project">
      <p className='content-text'>{text}</p>
      <img src={img} className='project-photo' alt="project image" width={'100%'} height={'100%'} />
    </div>
  );
};

export default ModalWindowProject;
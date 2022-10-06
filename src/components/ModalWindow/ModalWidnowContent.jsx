import React from "react";
import './ModalWindowContent.scss';

const ModalWindowContent = ({ city, children }) => {
  return (
    <div>
      <h1 className='content-title'>{city}</h1>
      {children}
    </div>
  );
};

export default ModalWindowContent;
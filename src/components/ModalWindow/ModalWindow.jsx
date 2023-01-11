import React from "react";
import cl from './ModalWindow.module.scss';

const ModalWindow = ({ isActive, setActive, content }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={isActive ?
        `${cl.ModalWindowBackground} ${cl.ModalWindowBackground__active}` :
        cl.ModalWindowBackground}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className={isActive ?
          `${cl.ModalWindowContent} ${cl.ModalWindowContent__active}` :
          cl.ModalWindowContent}
      >
        <div className={cl.ContentContainer}>
          {content}
        </div>
        <div className={cl.cross} onClick={() => setActive(false)}></div>
      </div>
    </div >
  );
};

export default ModalWindow;

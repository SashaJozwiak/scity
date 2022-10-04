import React from "react";
import cl from './ModalWindow.module.scss';

const ModalWindow = ({ isActive, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={isActive ?
        `${cl.ModalWindowBackground} ${cl.ModalWindowBackground__active}` :
        cl.ModalWindowBackground}
    >
      <div className={isActive ?
        `${cl.ModalWindowContent} ${cl.ModalWindowContent__active}` :
        cl.ModalWindowContent}></div>
    </div>
  );
};

export default ModalWindow;

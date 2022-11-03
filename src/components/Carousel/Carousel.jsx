import React, { useState } from "react";
import cl from './Carousel.module.scss';

const Carousel = ({ id, firstCadr, secondCadr, thirdCadr, firstCadrName, secondCadrName, thirdCadrName }) => {
  const [firstClass, setFirstClass] = useState(`${cl.first} ${cl.first_active}`);
  const [secondClass, setSecondClass] = useState(`${cl.second}`);
  const [thirdClass, setThirdClass] = useState(`${cl.third}`);
  const [activeButton, seActiveButton] = useState('first');

  const setActive = (position) => {
    if (position === 'first') {
      setFirstClass(`${cl.first} ${cl.first_active}`);
      setSecondClass(`${cl.second}`);
      setThirdClass(`${cl.third}`);
      seActiveButton('first');
    }
    if (position === 'second') {
      setFirstClass(`${cl.first}`);
      setSecondClass(`${cl.second} ${cl.second_active}`);
      setThirdClass(`${cl.third}`);
      seActiveButton('second');
    }
    if (position === 'third') {
      setFirstClass(`${cl.first}`);
      setSecondClass(`${cl.second}`);
      setThirdClass(`${cl.third} ${cl.third_active}`);
      seActiveButton('third');
    }
  };
  console.log(id);

  return (
    <div id={id} className={cl.container}>
      <div className={cl.nav}>
        <button
          className={activeButton === 'first' ? `${cl.button} ${cl.button_active}` : cl.button}
          onClick={() => setActive('first')}
        >
          {firstCadrName}
        </button>
        <button
          className={activeButton === 'second' ? `${cl.button} ${cl.button_active}` : cl.button}
          onClick={() => setActive('second')}
        >
          {secondCadrName}
        </button>
        <button
          className={activeButton === 'third' ? `${cl.button} ${cl.button_active}` : cl.button}
          onClick={() => setActive('third')}
        >
          {thirdCadrName}
        </button>
      </div>
      <div className={cl.carousel}>
        <div className={firstClass}>
          {firstCadr}
        </div>
        <div className={secondClass}>
          {secondCadr}
        </div>
        <div className={thirdClass}>
          {thirdCadr}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

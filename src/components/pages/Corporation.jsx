import React from "react";
import "./pages_scss/corporation.scss"

const Corporation = () => {
  return (
    <div className="corporation">
      <div className="corp about">
      <p className="link__text">Проектирование</p>
      </div>

      {/* <div className="arrow"></div> */}

      <div className="corp history">
      <p className="link__text">Производство</p>
      </div>

      {/* <div className="arrow"></div> */}

      <div className="corp achievements">
        <p className="link__text">Монтаж</p>
      </div>




    </div>
  );
};

export default Corporation;

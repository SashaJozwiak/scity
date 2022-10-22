import React from 'react';
// import map from '../../assets/pics/component-map.png';
import cl from './Map.module.scss';

const Map = ({ mapSrc, children }) => {
  return (
    <div className={cl.MapContainer}>


      <img className={cl.MapImage} src={mapSrc} />

      {children}


      <div className={cl.legend}>
        <ul className={cl.legendlist}>
          <li className={cl.legendlistone}>
            <button className={cl.legendbutton1}></button>
            <span className={cl.legendlists}>Реализованнные проекты</span></li>
          <li className={cl.legendlistone}>
            <button className={cl.legendbutton2}></button>
            <span className={cl.legendlists}>Поставщики комплектующих и сырья</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Map;

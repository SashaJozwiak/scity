import React from 'react';
import cl from './Map.module.scss';
import map from '../../assets/pics/component-map.png';

const Map = () => {
  return (
    <div className={cl.MapContainer}>
      <img className={cl.MapImage} src={map} />
    </div>
  );
};

export default Map;

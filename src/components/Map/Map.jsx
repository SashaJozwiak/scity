import React from 'react';
import cl from './Map.module.scss';
import map from '../../assets/pics/component-map.png';
import MapButton from '../UI/MapButton/MapButton.jsx';

const Map = ({ children }) => {
  return (
    <div className={cl.MapContainer}>
      <img className={cl.MapImage} src={map} />
      {children}
    </div>
  );
};

export default Map;

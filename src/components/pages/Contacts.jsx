import React from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";
import { renderToString } from 'react-dom/server'

import marker from './../../../src/assets/logo/logo.gif'

import cl from "../pages/pages_scss/contacts.module.scss";

const Contacts = () => {
  //const content = renderToString(<div className={cl.ballooncontent}><h1>ООО «СТРОЙСИТИ», МОСКВА, ул.МНЕВНИКИ, 3/1, оф. 216</h1></div>);
  return (
    <div>
      
      <div className={cl.mapwrapper}>
      <div className={cl.contacts} >
        <div className={cl.contactsblock}>
        <h1 className={cl.title}>Контакты</h1>
        
        </div>
        
      </div>
      
        <YMaps>
        
          <Map
        
            width={'100vw'}
            height={'calc(100vh + 50px)'}
            defaultState={{ center: [55.773256, 37.498564], zoom: 13 }} >
              
            <Placemark
              geometry={[55.773256, 37.498564]}
              options={{
                iconLayout: "default#image",
                iconImageHref: marker,
                iconImageSize: [50, 65],
              }}
              properties={{
                hintContent: 'ООО «СТРОЙСИТИ»',
                //balloonContent: content,
              }}
              modules={
                ['geoObject.addon.balloon', 'geoObject.addon.hint']
              }
            />
            
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;

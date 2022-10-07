import React from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";
import { renderToString } from 'react-dom/server'

import marker from './../../../src/assets/logo/logo.gif'

import cl from "../pages/pages_scss/contacts.module.scss";
import "../pages/pages_scss/contacts.module.scss";

const Contacts = () => {
  //const content = renderToString(<div className={cl.ballooncontent}><h1>ООО «СТРОЙСИТИ», МОСКВА, ул.МНЕВНИКИ, 3/1, оф. 216</h1></div>);
  return (
    
      <div className={cl.mapwrapper}>
        <div className={cl.contacts} >
          <div className={cl.contactsblock}>
            <h1 className={cl.title}>Контакты</h1>
            {/* <p className={cl.text}>ООО «СТРОЙСИТИ»</p> */}
            <address className={cl.text}>г.МОСКВА, ул. МНЕВНИКИ, 3/1, офис 216</address>
            <a className={cl.phone}href="tel:+74951290169"> 📞 +7 (495) 129-01-69</a>

              </div><div className={cl.divform}>
                    
              <div className={cl.forma}>
              <p>feedback form soon</p>
                    <div className={cl.format}>
                      
                    </div></div>

                
            

          
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
    
  );
};

export default Contacts;

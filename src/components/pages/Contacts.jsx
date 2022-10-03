import React from "react";
import cl from "../pages/pages_scss/contacts.module.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { renderToString } from 'react-dom/server'

const Contacts = () => {
  const content = renderToString(<div className="balloon-content"></div>);
  return (
    <div>
      <div className={cl.mapwrapper}>
        <YMaps>
          <Map
            width={'100vw'}
            height={'calc(100vh + 50px)'}
            defaultState={{ center: [55.755864, 37.617698], zoom: 9 }} >
            <Placemark
              geometry={[55.755864, 37.617698]}
              options={{
                iconLayout: "default#image",
                iconImageHref: 'https://img.icons8.com/ios-filled/2x/marker-x.png',
                iconImageSize: [50, 50],
              }}
              properties={{
                hintContent: 'Это хинт',
                balloonContent: content
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

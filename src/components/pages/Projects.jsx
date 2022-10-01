import React from "react";
import cl from "../pages/pages_scss/projects.module.scss"
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Projects = () => {
  return (
    <div className={cl.mapwrapper}>
      <YMaps>
        <Map
          width={960}
          height={720}
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
              balloonContent: 'Это балун'
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

export default Projects;

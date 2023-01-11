import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import marker from './../../../src/assets/logo/logo1_svg.svg'
import cl from "../pages/pages_scss/contacts.module.scss";
import "../pages/pages_scss/contacts.module.scss";
import FeedbackForm from "../FeedbackForm/FeedbackForm.jsx";

const Contacts = () => {
  return (
    <div className={cl.mapwrapper}>
      <div className={cl.contacts} >
        <div className={cl.contactsblock}>
          <h1 className={cl.title}>Контакты</h1>
          {/* <p className={cl.text}>ООО «СТРОЙСИТИ»</p> */}
          <address className={cl.text}>г.МОСКВА, ул. МНЕВНИКИ, 3/1, офис 216</address>
          <a className={cl.phone} href="tel:+74951290169"> <svg className={cl.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg> +7 (495) 129-01-69</a>

        </div>

        {/* <div className={cl.arrow8}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        <FeedbackForm />

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
              hintContent: 'ООО «СТРОЙСИТИ» г.МОСКВА, ул. МНЕВНИКИ, 3/1, офис 216',
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

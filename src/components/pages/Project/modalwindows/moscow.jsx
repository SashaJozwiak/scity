import React from "react";
import cl from "../../Project/modalwindows/modals.module.scss"

const Moscow= () => {
      return (
        <div id="openModal" className={cl.modal}>
          <div className={cl.modaldialog}>
            <div className={cl.modalcontent}>
              <div className={cl.modalheader}>
                <h3 className={cl.modaltitle}>Название</h3>
                <a href="#close" title="Close"className={cl.close} onClick >×</a>
              </div>
              <div className={cl.modalbody}>    
                <p>Содержимое модального окна...</p>
              </div>
            </div>
         </div>        
       </div>
  
    );
  };

export default Moscow;
import React from "react";
import logo from "../../../assets/logo/logo_sc.svg"

import cl from "./Burger.module.scss";
import "./burgcss.scss";

const Burger = ({ burgerActive, setBurgerActive }) => {

  const burgerOnClick = () => {
    setBurgerActive(!burgerActive);
    console.log(burgerActive);
    if (burgerActive) {
    window.location.assign('../');
    //document.querySelector(".transparent").style.display ='inline-block';
    
  } else if (!burgerActive) {
    //document.querySelector(".transparent").style.display ='inline-block';
    document.querySelector(".transparent").classList.add("transparent2");
    document.querySelector(".corporation").classList.add("corporation2");
    document.querySelector(".logofontgo").classList.add("logofontgo2");
    document.querySelector(".clickArea").classList.add("clickArea2");
    
    
  }

  useEffect(() => {
    if (!burgerActive) {
      document.querySelector(".transparent").classList.add("transparent2");
      document.querySelector(".corporation").classList.add(".corporation2");
      document.querySelector(".logofontgo").classList.add("logofontgo2");
      document.querySelector(".clickArea").classList.add("clickArea2");
      
    }
  });




  };
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setBurgerActive(false);
  });

  return (
    <div>

<img
        className="logofontgo"
        src={logo}
        alt={"logo"}
      />
      
    <div className="clickArea" onClick={burgerOnClick}>
      <div className={burgerActive ? `${cl.burger} ${cl.burger_active}` : `${cl.burger}`}>
        <div className={cl.burgerLine} />
      </div>
    </div>
    </div>
  );
};

export default Burger;
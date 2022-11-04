import React, { useEffect } from "react";
import logo from "../../../assets/logo/logo_sc.svg"

import cl from "./Burger.module.scss";
import "./burgcss.scss";

const Burger = ({ burgerActive, setBurgerActive }) => {

  const burgerOnClick = () => {
    setBurgerActive(!burgerActive);
  };

  useEffect(() => {
    if (burgerActive) {
      document.querySelector(".transparent").classList.add("transparent2");
      document.querySelector(".corporation").classList.add("corporation2");
      //document.querySelector(".logofontgo").classList.add("logofontgo2");
      document.querySelector(".clickArea").classList.add("clickArea2");
      document.querySelector(".wrapper").classList.add("wrapper2");
      //document.body.classList.add("scroll");
      //document.querySelector("body").classList.remove("scroll");
    } else if (!burgerActive) {
      document.querySelector(".transparent").classList.remove("transparent2");
      document.querySelector(".corporation").classList.remove("corporation2");
      //document.querySelector(".logofontgo").classList.remove("logofontgo2");
      document.querySelector(".clickArea").classList.remove("clickArea2");
      document.querySelector(".wrapper").classList.remove("wrapper2");
      //document.body.classList.remove("scroll");
      //document.querySelector("body").classList.remove("scroll");
      //document.querySelector("html")
    }
  }, [burgerActive]);

  return (
    <div className={cl.container}>

      {
        !burgerActive &&
        <a href="#">
          <img
          className="logofontgo"
          src={logo}
          alt={"logo"}
        />
        </a>
      }

      <div className="clickArea" onClick={burgerOnClick}>
        <div className={burgerActive ? `${cl.burger} ${cl.burger_active}` : `${cl.burger}`}>
          <div className={cl.burgerLine} />
        </div>
      </div>
    </div>
  );
};

export default Burger;